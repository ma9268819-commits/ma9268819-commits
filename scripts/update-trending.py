"""Generate the GitHub-only documented winners guide from a read-only archive checkout."""
import datetime,json,re,subprocess,sys
from pathlib import Path
from urllib.parse import quote
SOURCE='antonkomarev/github-trending-archive'
NAME=re.compile(r'[-\w.]+/[-\w.]+',re.ASCII)
def generate(source,output,now=None):
    now=now or datetime.datetime.now(datetime.timezone.utc)
    sha=subprocess.check_output(['git','rev-parse','HEAD'],cwd=source,text=True).strip()
    if not re.fullmatch('[0-9a-f]{40}',sha):raise ValueError('Invalid source commit')
    groups={}; dates=[]
    for path in sorted((source/'archive/repository').rglob('(null).json')):
        entry=json.loads(path.read_text())
        if entry.get('language') is not None:raise ValueError('Not a global snapshot')
        date=entry['date']; datetime.date.fromisoformat(date)
        if path.parent.name!=date:raise ValueError('Snapshot date mismatch')
        names=entry.get('list',[])
        if not names:continue
        name=names[0]
        if not NAME.fullmatch(name):raise ValueError('Invalid repository name')
        groups.setdefault(name,set()).add(date);dates.append(date)
    if len(groups)<100:raise ValueError('Archive coverage unexpectedly small; refusing replacement')
    output.parent.mkdir(parents=True,exist_ok=True)
    if output.exists():
        previous=len(re.findall(r'^\| \[[^\]]+\]\(https://github.com/',output.read_text(),re.M))
        if len(groups)<previous*.9:raise ValueError('Archive lost more than 10% of projects')
    local=now.astimezone(datetime.timezone(datetime.timedelta(hours=4)))
    guide=f'''<div dir="rtl">\n\n# 🏆 تصدّر موثّق\n\n[← ارجع للصفحة الرئيسية](../README.md) · [🔥 الرائج الآن على GitHub](https://github.com/trending?since=daily)\n\n**{len(groups)} مشروعًا** ظهروا أولًا في لقطة من قائمة GitHub Trending اليومية لكل اللغات، حسب أرشيف مستقل. اضغط اسم المشروع لفتحه، والتاريخ لمشاهدة الدليل.\n\n- **آخر تحديث ناجح للقائمة:** {local:%Y-%m-%d %H:%M} بتوقيت الإمارات.\n- **أحدث تاريخ متاح في المصدر:** {max(dates)}.\n- **التغطية المتاحة:** {min(dates)} — {max(dates)}، وقد توجد فجوات.\n- التحديث مجدول كل ساعة عبر GitHub Actions؛ إضافة تواريخ جديدة تعتمد على تحديث الأرشيف نفسه، ولا تعني رصدًا لحظيًا. قد تتأخر مواعيد GitHub.\n- [حالة التحديث وتشغيلاته](https://github.com/ma9268819-commits/ma9268819-commits/actions/workflows/update-trending.yml). عند فشل التحديث تبقى آخر نسخة ناجحة وتاريخها.\n\nالمركز الأول يخص **وقت اللقطة ونطاق كل اللغات**، ولا يعني تصدّر اليوم كله. ليست شهادة من GitHub ولا قائمة بكل من وضع الشارة، ولا سجلًا شاملًا لكل تاريخ GitHub. لا نعتمد صورة الشارة كدليل.\n\nالمصدر: [{SOURCE}](https://github.com/{SOURCE})، [ترخيص MIT](../radar/web/LICENSE-Trending-Archive.txt). روابط الأدلة ثابتة عند commit `{sha}`. يحفظ جامع الأرشيف ترتيب عناصر الصفحة دون فرزها بالنجوم.\n\n## المشاريع — مرتبة حسب أحدث ظهور في المركز الأول\n\n| المشروع | آخر تاريخ موثّق ودليله | لقطات التصدّر المتاحة |\n| --- | --- | --- |\n'''
    for name,days in sorted(groups.items(),key=lambda item:(-datetime.date.fromisoformat(max(item[1])).toordinal(),item[0].lower())):
        date=max(days);url=f'https://github.com/{SOURCE}/blob/{sha}/archive/repository/{date[:4]}/{date}/(null).json'
        guide+=f'| [{name}](https://github.com/{name}) | [{date} ↗]({url}) | {len(days)} |\n'
    guide+='\n</div>\n'
    output.write_text(guide)
    print(f'Updated {len(groups)} documented global winners; latest source date {max(dates)}; commit {sha}')
    return groups
if __name__=='__main__':generate(Path(sys.argv[1]),Path(sys.argv[2]))
