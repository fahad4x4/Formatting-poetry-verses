# 📜 Formatting Poetry Verses | منسّق أبيات الشعر

> A browser-based tool that neatly justifies Arabic poetry verses, using spacing or kashida (tatweel), and outputs copy-ready text.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-GPL--3.0-blue)

**[English](#english) | [العربية](#arabic)**

---

<a id="english"></a>

## English

### Overview

Formatting Poetry Verses is a small static web page (HTML, CSS, and plain JavaScript) for laying out Arabic poems. You type the poem with its two hemistichs (*sadr* and *ajuz*) separated by `=`, and the tool stretches each hemistich to the width of the longest one, so the verses line up evenly. The result appears in a preview and as plain text you can copy and paste into forums, social media, or documents.

The interface is in Arabic and works right-to-left. There is no server or build step: everything runs in the browser.

### Features

- **Optional title and poet name**, placed above the poem in the output, each followed by a separator line.
- **Hemistich separator**: write `=` between the two halves of a verse; a line without `=` is treated as a single-hemistich line.
- **Two justification methods**:
  - **Extended words** (كلمات ممتدة, default): adds kashida/tatweel (`ـ`) between connectable Arabic letters. The word «الله» is left untouched.
  - **Spaced words** (كلمات متباعدة): widens the spaces between words.
- **Two layouts**:
  - **Two columns** (عمودين, default): both hemistichs on one line, joined by a separator.
  - **One column** (عمود): each hemistich on its own line, with a blank line between verses.
- **Custom separator** between the two hemistichs in the two-column layout (default `...`).
- **Input clean-up**: extra spaces, empty leading/trailing lines, and old kashida characters are removed before formatting.
- **Preview** of the formatted poem, plus a text box with the result and a **Copy** button.

### Requirements

- Any modern web browser.
- No installation, server, or dependencies.

### Installation

```bash
git clone https://github.com/fahad4x4/Formatting-poetry-verses.git
cd Formatting-poetry-verses
```

You can also download the repository as a ZIP from GitHub, or upload the files to any static web host.

### Usage

1. Open `index.html` in your browser.
2. Optionally enter the poem title (عنوان القصيدة) and the poet's name (اسم الشاعر).
3. Type the poem in the main box (أكتب القصيدة هنا), one verse per line, with `=` between the two hemistichs. For example:

   ```
   الشطر الأول من البيت = الشطر الثاني من البيت
   ```

4. Choose the separator (الفاصل), the layout (شكل), and the justification method (كيفية التنسيق).
5. Click **تنفيذ** (Run). Changing the layout or method re-formats the poem straight away.
6. Check the result under **معاينة** (Preview), then click **نسخ** (Copy) to copy the text.

### Project structure

```
Formatting-poetry-verses/
├── index.html    ← the tool's page (form, options, preview, copy box)
├── copy.js       ← formatting and justification logic, plus the copy button
├── styles.css    ← page styles
├── LICENSE       ← GNU GPL v3
└── README.md
```

### License

Released under the **GNU General Public License v3.0**. See [LICENSE](LICENSE) for the full text.

### Author

**Fahad ALGhathbar**: [@fahad4x4](https://github.com/fahad4x4)

---

<a id="arabic"></a>

<div dir="rtl">

## العربية

### نظرة عامة

**منسّق أبيات الشعر** صفحة ويب ثابتة صغيرة (HTML وCSS وJavaScript) لتنسيق القصائد العربية. تكتب القصيدة وتفصل بين شطري البيت (الصدر والعجز) بعلامة `=`، فتمدّ الأداة كل شطر إلى عرض أطول شطر في القصيدة لتتساوى الأبيات وتصطف بشكل منتظم. تظهر النتيجة في معاينة، وكنص عادي جاهز للنسخ واللصق في المنتديات ومواقع التواصل والمستندات.

واجهة الأداة عربية وتعمل من اليمين إلى اليسار، ولا تحتاج إلى خادم أو خطوات بناء، إذ يجري كل شيء داخل المتصفح.

### المزايا

- **عنوان القصيدة واسم الشاعر** (اختياريان)، ويظهران أعلى القصيدة في النتيجة يتبع كلًّا منهما خط فاصل.
- **فاصل الشطرين**: اكتب `=` بين شطري البيت، والسطر الذي لا يحتوي على `=` يُعامل على أنه بيت من شطر واحد.
- **طريقتان للتنسيق**:
  - **كلمات ممتدة** (الافتراضية): تضيف حرف التطويل (الكشيدة `ـ`) بين الحروف العربية القابلة للوصل، مع ترك لفظ الجلالة «الله» دون تعديل.
  - **كلمات متباعدة**: توسّع المسافات بين الكلمات.
- **شكلان للعرض**:
  - **عمودين** (الافتراضي): الشطران في سطر واحد يفصل بينهما رمز الفاصل.
  - **عمود**: كل شطر في سطر مستقل، مع سطر فارغ بين الأبيات.
- **رمز فاصل قابل للتخصيص** بين الشطرين في شكل العمودين (الافتراضي `...`).
- **تنظيف المدخلات**: حذف المسافات الزائدة والأسطر الفارغة في البداية والنهاية وحروف التطويل القديمة قبل التنسيق.
- **معاينة** للقصيدة بعد التنسيق، ومربع نص يحوي النتيجة مع زر **نسخ**.

### المتطلبات

- أي متصفح ويب حديث.
- لا حاجة إلى تثبيت أو خادم أو اعتماديات.

### التثبيت

<div dir="ltr">

```bash
git clone https://github.com/fahad4x4/Formatting-poetry-verses.git
cd Formatting-poetry-verses
```

</div>

ويمكنك أيضًا تنزيل المستودع كملف ZIP من GitHub، أو رفع الملفات إلى أي استضافة للمواقع الثابتة.

### الاستخدام

1. افتح الملف `index.html` في المتصفح.
2. أدخل عنوان القصيدة واسم الشاعر إن رغبت.
3. اكتب القصيدة في المربع الرئيسي «أكتب القصيدة هنا»، بيتًا في كل سطر، مع علامة `=` بين الشطرين. مثال:

<div dir="ltr">

```
الشطر الأول من البيت = الشطر الثاني من البيت
```

</div>

4. اختر رمز «الفاصل» و«الشكل» و«كيفية التنسيق».
5. اضغط زر **تنفيذ**. وعند تغيير الشكل أو طريقة التنسيق يُعاد تنسيق القصيدة فورًا.
6. راجع النتيجة في قسم **معاينة**، ثم اضغط **نسخ** لنسخ النص.

### هيكل المشروع

<div dir="ltr">

```
Formatting-poetry-verses/
├── index.html    ← the tool's page (form, options, preview, copy box)
├── copy.js       ← formatting and justification logic, plus the copy button
├── styles.css    ← page styles
├── LICENSE       ← GNU GPL v3
└── README.md
```

</div>

- `index.html`: صفحة الأداة (النموذج والخيارات والمعاينة ومربع النسخ).
- `copy.js`: منطق التنسيق والمحاذاة وزر النسخ.
- `styles.css`: تنسيقات الصفحة.

### الرخصة

المشروع منشور بموجب **رخصة جنو العمومية العامة، الإصدار 3.0 (GPL-3.0)**. راجع ملف [LICENSE](LICENSE) للنص الكامل.

### المؤلف

**فهد الغثبر (Fahad ALGhathbar)**: [@fahad4x4](https://github.com/fahad4x4)

</div>
