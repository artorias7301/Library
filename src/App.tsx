import { useState } from "react";
import "./index.css";

const story = {
  author: "Artorias",
  category: "FANTASY · PERSIAN STORY",
  chapters: [
    {
      title: "هیماری: ساحرهٔ مرگ",
      text: [
'نصفه شب بود و تنها صدای جیغی از دور دست شنیده میشد.',
'پسر بچه‌ای با تمام سرعت بین درختان میدوید. شاخه‌ها به صورتش میخوردندو ریشه‌های درختان که از زمین بیرون زده بود چندین بار نزدیک بود او را به زمین بزند ولی خودش را نگه میداشت و به دیدن ادامه میداد.',
'نفس هایش به شمارش افتاده بود و دیگر توان ادامه دادن نداشت، نمیدونست چقدر از دهکده دور شده و حتی نمیدونست کجا داره میره و فقط میخواست از انجا دور بشه.',
'صدای مهیبی توی جنگل پیچید.',
'پسر وحشت زده و نفس زنان ایستاد و به عقب نگاه کرد. نور سرخ و نارنجی شعله های اتش دیده میشد. دهکده ای را میدید که در آتش میسوخت.',
'چند لحظه خیره ماند. نفسش بریده بود که صدایی مبهم از بین شاخه های درختان شنید صدایی که شبیه صدای هیچ هیوانی نبود.',
'پسر فورا برگشت و به دویدن ادامه داد. ترس وجودش را گرفته بود و نمیدانست چه چیزی در تعقیبش است اما با تمام توان میدوید.',
'جنگل در تاریکی فرو رفته بود و هیچ چیز دیده نمیشد. نفس کشیدن برایش سخت شده بود اما ادامه میداد تا اینکه ناگهان به چیزی برخورد کرد و به زمین افتاد.',
'چند لحظه همان‌طور ماند و نفس نفس میزد ولی سرش را که بالا اورد دید که چیزی مقابلش ایستاده است.',
'نتوانست بفهمد چیست. موجودی بلند و عظیم در برابرش بود که اندام هایش شکل عادی نداشت و ظاهری شبیه کابوس داشت.',
'موجود سرش را به سمت او خم کرد و صدای خرناسی از گلویش بیرو امد.',
'پسر با وحشت خودش را به عقب کشید. و با دست هایش خودش را روی زمین میکشید و سعی میکرد از آن موجود فاصله بگیرد، اما پشتش به تنه درختی بزرگ خورد و دیگر جایی برای عقب رفتن نبود.',
'پسر به تنه درخت چسبیده بود و با چشمانی پر از اشک و ترس به آن موجود خیره ماند.',
'موجود قدی به سمتش نزدیک شد و دستش را بالا اورد.',
'پسر چشمانش را بشت و سرش را پایین انداخت. بدنش از شدت ترس میلرزید و نمیتوانست حرکت کند.',
'ناگهان زنی سیاه پوش از میان تاریکی بیرون اورد و اون موجود را تنها با لمسی از پا در آورد.',
'پسر چشمانش را باز کرد و موجود را دید که با شدت به زمین افتاد و به ان خیره ماند.',
'صدای قدم هایی را شنید که به سمتش نزدیک میشد. نگاهش را چرخاند و زن را دید که به سمتش امد و دستش را به سمت پسر دراز کرد.',
'توی اون تاریکی چیزی نمیتوانست ببیند ولی فقط خراشی بر روی چهره زن دید و زخم هایی عمیق بر روی دست او.',
'پسر فورا خودش را به درخت پشت سرش چسباند. هنوز نمی دانست چه اتفاقی دارد می افتد و آن زن کیست.',
'زن متوجه ترس او شد; برای لحظه ای ایستاد و سپس به ارامی گفت:"واقعا متاسفم، اما راه دیگه‌ای پیدا نکردم"',
'پسر با گیجی به اون نگاه میکرد و نمیدانست چرا داره ازش عذر خواهی میکند و منظورش از اون حرف ها چیست و تنها ترسی در وجودش احساس میکرد.',
'حلقه‌ای از نور پشت سر زن ظاهر شد و نور شدیدی کل جنگل رو به سفیدی فرو برد.'
      ]
    },
    {
      title: "COMMING SOON",
      text: []
    }
  ]
};

const chapters = story.chapters
export default function App() {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState(20);
  const [darkMode, setDarkMode] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const chapter = chapters[chapterIndex];

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <aside className="sidebar">
        <a className="brand" href="#">
          <span className="brand-icon">▤</span>
          StoryNest
        </a>

        <nav className="navigation">
          <a className="nav-item active" href="#">⌂ <span>Home</span></a>
          <a className="nav-item" href="#">▤ <span>My Library</span></a>
          <a className="nav-item" href="#">♧ <span>Bookmarks</span></a>
          <a className="nav-item" href="#">⌕ <span>Search</span></a>
        </nav>

        <div className="side-heading">CATEGORIES</div>
        {["Fantasy", "Sci-Fi", "Mystery", "Romance", "Horror", "Adventure"].map(
          (genre) => (
            <a className="genre" href="#" key={genre}>{genre}</a>
          )
        )}

        <div className="sidebar-note">
          <span>✧</span>
          <p>Find a quiet place. Enter another world.</p>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <span className="mobile-brand">StoryNest</span>
          <span className="reading-status">A little escape, just for you.</span>
          <button
            className="icon-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle reading theme"
            title="Toggle reading theme"
          >
            {darkMode ? "☼" : "☾"}
          </button>
        </header>

        <article className="story">
          <a className="back-link" href="#">← Back to stories</a>

          <div className="story-cover">
            <div className="cover-overlay">
              <span className="cover-label">A STORY OF LOST HOPE</span>
              <span className="cover-subtitle">Some kingdoms never truly die.</span>
            </div>
          </div>

          <div className="story-heading">
            <div>
              <span className="category-label">{story.category}</span>
              <h1 className="persian-title" lang="fa" dir="rtl">{chapter.title}</h1>
              <div className="story-meta">
                <span>By {story.author}</span>
                <span>◷ 8 min read</span>
              </div>
            </div>

            <div className="reading-controls">
              <button
                className={`icon-button ${bookmarked ? "selected" : ""}`}
                onClick={() => setBookmarked(!bookmarked)}
                title="Bookmark story"
                aria-label="Bookmark story"
              >
                {bookmarked ? "♥" : "♡"}
              </button>
              <button
                className="icon-button font-control"
                onClick={() => setFontSize(Math.max(15, fontSize - 1))}
                aria-label="Decrease font size"
                title="Decrease font size"
              >A−</button>
              <button
                className="icon-button font-control"
                onClick={() => setFontSize(Math.min(26, fontSize + 1))}
                aria-label="Increase font size"
                title="Increase font size"
              >A+</button>
            </div>
          </div>

          <div
            className="story-text persian-text" 
            lang="fa"
            dir="rtl"
            style={{ fontSize: `${fontSize}px` }}
          >
            {chapter.text.map((paragraph, index) => (
              <p className={index === 0 ? "first-paragraph" : ""} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="chapter-footer">
            <button
              className="chapter-button"
              disabled={chapterIndex === 0}
              onClick={() => {
                setChapterIndex(chapterIndex - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              ← Previous chapter
            </button>
            <span>{chapterIndex + 1} of {chapters.length}</span>
            <button
              className="chapter-button"
              disabled={chapterIndex === chapters.length - 1}
              onClick={() => {
                setChapterIndex(chapterIndex + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Next chapter →
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}


