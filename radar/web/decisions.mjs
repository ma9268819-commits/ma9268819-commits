const checked='2026-10-18';
function record(kind,level,extras={}){return{kind,level,reviewedAt:checked,...extras}}
export const catalog={
'localsend/localsend':record('app','beginner',{platforms:['android','ios','windows','macos','linux'],price:'تطبيق مجاني ومفتوح المصدر وفق وصف المشروع.',requirements:'الجهازان على نفس الشبكة المحلية. راجع الحد الأدنى لإصدار نظامك.',firstStep:'ثبّت التطبيق من الموقع الرسمي على الجهازين، ثم جرّب نقل صورة واحدة.',success:'الصورة وصلت للجهاز الثاني وفتحتها بنجاح.'}),
'ollama/ollama':record('technical','technical',{platforms:['windows','macos','linux'],requirements:'جهاز بذاكرة ومساحة تناسب النموذج المختار. لا يمكن تأكيد ملاءمة النموذج من اسم النظام فقط.',firstStep:'حدد نظام جهازك والذاكرة المتاحة، ثم راجع متطلبات نموذج واحد قبل تنزيله.',success:'حددت نموذجًا ومتطلبات تشغيله، وتأكدت من قدرة جهازك على استيفائها.'}),
'Stirling-Tools/Stirling-PDF':record('platform','technical',{requirements:'تختلف المتطلبات بين خيارات الاستخدام والاستضافة. لم نفترض أنه تطبيق أندرويد جاهز.',firstStep:'اختر وظيفة واحدة لمعالجة الملفات، ثم راجع طريقة استخدامها من الموقع الرسمي.',success:'أنجزت العملية المطلوبة على ملف تجريبي وراجعت النتيجة.'}),
'firecrawl/pdf-inspector':record('library','developer',{requirements:'بيئة تطوير واستخدام برمجي وفق دليل المكتبة؛ ليست ملف تثبيت للموبايل.',firstStep:'اقرأ مثال الاستخدام وحدد أين ستدمج المكتبة داخل مشروعك.',success:'فهمت مدخلات المكتبة ومخرجاتها من المثال، قبل إضافتها لمشروعك.'}),
'docusealco/docuseal':record('platform','technical',{firstStep:'راجع خيارات الاستخدام، ثم جرّب مستندًا غير حساس.',success:'أكملت نموذجًا تجريبيًا وفهمت طريقة حفظه وتوقيعه.'}),
'n8n-io/n8n':record('platform','technical',{requirements:'اختيار استضافة أو خدمة مستضافة، وحسابات الخدمات التي ستربطها. قد توجد تكاليف إضافية.',firstStep:'ارسم مهمة واحدة: ما الحدث الذي يبدأها، وما النتيجة المطلوبة؟',success:'حددت خطوة البداية والنتيجة والخدمات المطلوبة قبل تفعيل أي أتمتة.'}),
'codecrafters-io/build-your-own-x':record('learning','developer',{requirements:'معرفة أساسية بلغة الدرس المختار. هذه دروس وروابط وليست تطبيقًا للتنزيل.',firstStep:'اختر تقنية واحدة ودرسًا بلغة تعرفها، ثم اقرأ متطلباته.',success:'اخترت درسًا مناسبًا ونفذت أول تمرين فيه.'}),
'freeCodeCamp/freeCodeCamp':record('learning','beginner',{firstStep:'افتح المنصة الرسمية واختر مسار البداية، بدل محاولة تثبيت مستودع المنصة.',success:'أكملت أول تمرين وفهمت هدف مسار التعلم.'}),
'EbookFoundation/free-programming-books':record('catalog','beginner',{firstStep:'ابحث في الفهرس عن اللغة والموضوع المناسبين، ثم اختر موردًا واحدًا.',success:'وجدت كتابًا أو دورة مناسبة وبدأت القسم الأول.'}),
'justjavac/free-programming-books-zh_CN':record('catalog','beginner',{requirements:'الموارد الأصلية صينية. ترجمة الفهرس لا تعني ترجمة الكتب.',firstStep:'تحقق من لغة المورد قبل بدء دراسته.',success:'وجدت موردًا تفهم لغته ومناسبًا لمستواك.'}),
'sindresorhus/awesome':record('catalog','beginner'),
'public-apis/public-apis':record('catalog','developer'),
'donnemartin/system-design-primer':record('learning','developer'),
'nilbuild/developer-roadmap':record('learning','beginner'),
'kamranahmedse/developer-roadmap':record('learning','beginner'),
'jwasham/coding-interview-university':record('learning','beginner'),
'vinta/awesome-python':record('catalog','developer'),
'awesome-selfhosted/awesome-selfhosted':record('catalog','technical'),
'practical-tutorials/project-based-learning':record('learning','developer'),
'react/react':record('library','developer'),
'facebook/react':record('library','developer'),
'TheAlgorithms/Python':record('learning','developer'),
'torvalds/linux':record('technical','developer'),
'openclaw/openclaw':record('agent','technical'),
'morluto/rea':record('technical','developer'),
'obra/superpowers':record('technical','developer'),
'mattpocock/skills':record('technical','developer'),
'affaan-m/ECC':record('technical','developer'),
'NousResearch/hermes-agent':record('agent','technical'),
'deepseek-ai/deepseek-harness':record('technical','developer'),
'996icu/996.ICU':record('community','beginner'),
'trimstray/the-book-of-secret-knowledge':record('catalog','technical'),
'multica-ai/andrej-karpathy-skills':record('technical','developer')};
export const kindLabels={app:'تطبيق جاهز',platform:'منصة تحتاج اختيار طريقة تشغيل',library:'مكتبة للمطورين',learning:'تعلم ودروس',catalog:'قائمة موارد',technical:'أداة تقنية',agent:'وكيل ذكاء اصطناعي',community:'محتوى مجتمعي',unknown:'النوع غير مصنّف بعد'};
export const missions={files:{title:'أنقل ملفاتي بين أجهزتي',repos:['localsend/localsend'],note:'ابدأ بتجربة نقل صورة بين جهازين على نفس الشبكة.'},pdf:{title:'أتعامل مع ملفات بي دي إف',repos:['Stirling-Tools/Stirling-PDF','firecrawl/pdf-inspector'],note:'أداة معالجة للمستخدم، ومكتبة للمطور؛ نوع المشروع يوضح الفرق.'},learn:{title:'أتعلم البرمجة',repos:['freeCodeCamp/freeCodeCamp','codecrafters-io/build-your-own-x'],note:'موارد تعليمية؛ لا تبحث عن ملف تثبيت داخلها.'},automate:{title:'أوفّر وقتي في مهام متكررة',repos:['n8n-io/n8n'],note:'اختر مهمة واحدة قبل إعداد الخدمات وربط الحسابات.'},ai:{title:'أجرّب ذكاء اصطناعي محلي',repos:['ollama/ollama'],note:'نظام التشغيل وحده لا يكفي؛ راجع الذاكرة ومتطلبات النموذج.'}};
export function assessment(repo,profile={device:'any',level:'beginner'}){const item=catalog[repo.full_name];if(!item)return{kind:'unknown',label:kindLabels.unknown,status:'unknown',reason:'لا توجد مراجعة لملاءمة هذا المشروع بعد. افتح الدليل قبل الاختيار.',source:null};let status='fit',reason='نوع المشروع مناسب كبداية للمستوى المختار؛ راجع المتطلبات.';if(profile.device&&profile.device!=='any'){if(item.platforms&&!item.platforms.includes(profile.device)){status='mismatch';reason='النظام المختار غير موجود ضمن الأنظمة التي راجعنا دعمها.'}else if(item.platforms){reason='نظامك ضمن الأنظمة المذكورة؛ يبقى إصدار النظام ومتطلبات الجهاز بحاجة للمراجعة.'}else if(['learning','catalog','community'].includes(item.kind)){status='unknown';reason='مورد للقراءة أو التعلم؛ توافق الدروس والأدوات المرتبطة بجهازك غير مُراجع.'}else{status='unknown';reason='توافقه مع جهازك غير مؤكد من المعلومات المصنّفة.'}}if(profile.level==='beginner'&&['developer','technical'].includes(item.level)){status='mismatch';reason='يحتاج خبرة برمجية أو إعدادًا تقنيًا؛ قد لا يكون بداية سهلة لمبتدئ.'}return{...item,label:kindLabels[item.kind],status,reason,source:'https://github.com/'+repo.full_name}}
export function visibleFor(repo,profile){const a=assessment(repo,profile);if(profile.kind&&profile.kind!=='all'){const kinds={ready:['app'],learn:['learning','catalog'],technical:['library','technical','platform','agent']};if(!(kinds[profile.kind]||[]).includes(a.kind))return false}return!profile.onlySuitable||a.status==='fit'}
export function nextStep(repo){const a=assessment(repo);if(a.firstStep)return{step:a.firstStep,success:a.success};if(['learning','catalog'].includes(a.kind))return{step:'اختر موردًا واحدًا في الدليل وتحقق من لغته ومتطلباته قبل البدء.',success:'وجدت موردًا مناسبًا وأنجزت أول خطوة تعليمية.'};return{step:'راجع قسم المتطلبات وطريقة الاستخدام في الدليل قبل تثبيت أي شيء.',success:'حددت هل توجد طريقة تشغيل تناسب جهازك وخبرتك؛ النتيجة غير مؤكدة قبل المراجعة.'}}
