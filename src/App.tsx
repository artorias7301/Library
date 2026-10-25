
// import { useState } from "react";
// import "./index.css";

// const chapters = [
//   {
//     title: "The Lost Kingdom",
//     text: [
//       "The wind howled across the broken mountains, carrying with it the faint echoes of a forgotten past. Elara pulled her cloak tighter around her shoulders and glanced back at the ruins behind her. The once-great kingdom, now reduced to crumbling stone and silence, seemed to watch her with hollow eyes.",
//       "For as long as she could remember, the stories of the Lost Kingdom had been nothing more than bedtime tales — legends whispered by the fire, dismissed as dreams. But now, standing in the shadow of its fallen walls, she knew the truth: this was no myth. This was real.",
//       "The map in her hands, worn and fragile, marked the path ahead. It spoke of a hidden valley, a place where the last remnants of the kingdom's power still lingered. But it also warned of dangers — not just from the land, but from those who would do anything to claim what was left.",
//       "With a deep breath, Elara set forward. The journey had only just begun, and already she could feel the weight of what lay ahead."
//     ]
//   },
//   {
//     title: "Whispers in the Mist",
//     text: [
//       "Mist gathered between the ancient trees as Elara descended into the valley. Every step seemed to awaken a memory buried deep within the earth.",
//       "Somewhere beyond the fog, a bell rang once. She stopped. The map had shown no village here, no tower, and no sign of life.",
//       "Then a voice whispered her name, soft as falling snow. Elara tightened her grip on the map and stepped toward the sound."
//     ]
//   }
// ];

// export default function App() {
//   const [chapterIndex, setChapterIndex] = useState(0);
//   const [fontSize, setFontSize] = useState(19);
//   const [darkMode, setDarkMode] = useState(false);
//   const [bookmarked, setBookmarked] = useState(false);

//   const chapter = chapters[chapterIndex];

//   return (
//     <div className={`app ${darkMode ? "dark" : ""}`}>
//       <aside className="sidebar">
//         <a className="brand" href="#">
//           <span className="brand-icon">▤</span>
//           StoryNest
//         </a>

//         <nav className="navigation">
//           <a className="nav-item active" href="#">⌂ <span>Home</span></a>
//           <a className="nav-item" href="#">▤ <span>My Library</span></a>
//           <a className="nav-item" href="#">♧ <span>Bookmarks</span></a>
//           <a className="nav-item" href="#">⌕ <span>Search</span></a>
//         </nav>

//         <div className="side-heading">CATEGORIES</div>
//         {["Fantasy", "Sci-Fi", "Mystery", "Romance", "Horror", "Adventure"].map(
//           (genre) => (
//             <a className="genre" href="#" key={genre}>{genre}</a>
//           )
//         )}

//         <div className="sidebar-note">
//           <span>✧</span>
//           <p>Find a quiet place. Enter another world.</p>
//         </div>
//       </aside>

//       <main className="main">
//         <header className="topbar">
//           <span className="mobile-brand">StoryNest</span>
//           <span className="reading-status">A little escape, just for you.</span>
//           <button
//             className="icon-button"
//             onClick={() => setDarkMode(!darkMode)}
//             aria-label="Toggle reading theme"
//             title="Toggle reading theme"
//           >
//             {darkMode ? "☼" : "☾"}
//           </button>
//         </header>

//         <article className="story">
//           <a className="back-link" href="#">← Back to stories</a>

//           <div className="story-cover">
//             <div className="cover-overlay">
//               <span className="cover-label">A STORY OF LOST WORLDS</span>
//               <span className="cover-subtitle">Some kingdoms never truly die.</span>
//             </div>
//           </div>

//           <div className="story-heading">
//             <div>
//               <span className="category-label">FANTASY · CHAPTER {chapterIndex + 1}</span>
//               <h1>{chapter.title}</h1>
//               <div className="story-meta">
//                 <span>By Aria Blackwood</span>
//                 <span>◷ 12 min read</span>
//               </div>
//             </div>

//             <div className="reading-controls">
//               <button
//                 className={`icon-button ${bookmarked ? "selected" : ""}`}
//                 onClick={() => setBookmarked(!bookmarked)}
//                 title="Bookmark story"
//                 aria-label="Bookmark story"
//               >
//                 {bookmarked ? "♥" : "♡"}
//               </button>
//               <button
//                 className="icon-button font-control"
//                 onClick={() => setFontSize(Math.max(15, fontSize - 1))}
//                 aria-label="Decrease font size"
//                 title="Decrease font size"
//               >A−</button>
//               <button
//                 className="icon-button font-control"
//                 onClick={() => setFontSize(Math.min(26, fontSize + 1))}
//                 aria-label="Increase font size"
//                 title="Increase font size"
//               >A+</button>
//             </div>
//           </div>

//           <div
//             className="story-text"
//             style={{ fontSize: `${fontSize}px` }}
//           >
//             {chapter.text.map((paragraph, index) => (
//               <p className={index === 0 ? "first-paragraph" : ""} key={paragraph}>
//                 {paragraph}
//               </p>
//             ))}
//           </div>

//           <div className="chapter-footer">
//             <button
//               className="chapter-button"
//               disabled={chapterIndex === 0}
//               onClick={() => {
//                 setChapterIndex(chapterIndex - 1);
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//               }}
//             >
//               ← Previous chapter
//             </button>
//             <span>{chapterIndex + 1} of {chapters.length}</span>
//             <button
//               className="chapter-button"
//               disabled={chapterIndex === chapters.length - 1}
//               onClick={() => {
//                 setChapterIndex(chapterIndex + 1);
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//               }}
//             >
//               Next chapter →
//             </button>
//           </div>
//         </article>
//       </main>
//     </div>
//   );
// }























import { useState } from "react";
import "./index.css";

const story = {
  title: "آخرین نگهبان",
  author: "Artorias",
  category: "FANTASY · PERSIAN STORY",
  paragraphs: [
    "باد سردی از میان ویرانه‌های شهر می‌گذشت و صدای زوزه‌اش در کوچه‌های خالی می‌پیچید. آرمان شنل کهنه‌اش را محکم‌تر دور خود پیچید و به برج بلندی نگاه کرد که سال‌ها بود کسی جرئت نزدیک شدن به آن را نداشت.",
    "مردم روستا همیشه درباره‌ی آن برج داستان‌هایی تعریف می‌کردند؛ داستان‌هایی از پادشاهی فراموش‌شده، سربازانی که هرگز به خانه بازنگشتند و نگهبانی که سوگند خورده بود تا آخرین نفس از راز پادشاه محافظت کند.",
    "اما آرمان هیچ‌وقت به افسانه‌ها باور نداشت. تا آن شب که نامه‌ای قدیمی زیر در خانه‌اش پیدا کرد. روی کاغذ زردرنگ تنها یک جمله نوشته شده بود: «اگر هنوز به دنبال حقیقت هستی، پیش از طلوع به برج بیا.»",
    "ماه پشت ابرها پنهان شد. آرمان قدمی به جلو برداشت و دروازه‌ی زنگ‌زده با صدایی سنگین باز شد. در تاریکی، صدای مردی سالخورده به گوش رسید:",
    "«بالاخره آمدی. سال‌ها منتظرت بودم.»"
  ]
};

export default function App() {
  const [fontSize, setFontSize] = useState(20);
  const [darkMode, setDarkMode] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

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
              <h1 className="persian-title" lang="fa" dir="rtl">
                {story.title}
              </h1>
              <div className="story-meta">
                <span>By {story.author}</span>
                <span>◷ 8 min read</span>
              </div>
            </div>

            <div className="reading-controls">
              <button
                className={`icon-button ${bookmarked ? "selected" : ""}`}
                onClick={() => setBookmarked(!bookmarked)}
                aria-label="Bookmark story"
              >
                {bookmarked ? "♥" : "♡"}
              </button>
              <button
                className="icon-button font-control"
                onClick={() => setFontSize(Math.max(16, fontSize - 1))}
                aria-label="Decrease font size"
              >
                A−
              </button>
              <button
                className="icon-button font-control"
                onClick={() => setFontSize(Math.min(28, fontSize + 1))}
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>

          <div
            className="story-text persian-text"
            lang="fa"
            dir="rtl"
            style={{ fontSize: `${fontSize}px` }}
          >
            {story.paragraphs.map((paragraph, index) => (
              <p
                className={index === 0 ? "first-paragraph" : ""}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="chapter-footer">
            <button className="chapter-button" disabled>
              ← Previous chapter
            </button>
            <span>Chapter 1</span>
            <button className="chapter-button">
              Next chapter →
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
