"""Build the documented-first-place index from a local copy of the attributed archive.
Usage: python scripts/import-winners.py /absolute/path/to/github-trending-archive
Inspect source collector before updating; no downloaded code is executed.
"""
import sys,json,re,subprocess,datetime
from pathlib import Path
root=Path(sys.argv[1]);groups={};dates=[];scopes=set();total=0
for path in (root/'archive/repository').rglob('*.json'):
    entry=json.loads(path.read_text()); names=entry.get('list',[])
    if not names or not re.fullmatch(r'[-\w.]+/[-\w.]+',names[0]):continue
    scope=entry.get('language') or 'all';date=entry['date']
    if not re.fullmatch(r'\d{4}-\d\d-\d\d',date):continue
    groups.setdefault((names[0],scope),[]).append(date);dates.append(date);scopes.add(scope);total+=1
if not groups:raise SystemExit('No validated records')
sha=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()
web=Path(__file__).resolve().parents[1]/'web'
data={'source':'antonkomarev/github-trending-archive','commit':sha,'generatedAt':datetime.date.today().isoformat(),'from':min(dates),'to':max(dates),'snapshotCount':total,'scopes':sorted(scopes),'records':[{'repo':n,'scope':s,'dates':sorted(set(ds),reverse=True)} for (n,s),ds in sorted(groups.items())]}
(web/'winners.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')))
(web/'LICENSE-Trending-Archive.txt').write_text((root/'LICENSE').read_text())
print(f'{len(groups)} project/scope records; {total} snapshots; commit {sha}')
