/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import type React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Film, PenTool, User, Tv, Menu, X, ChevronRight,
  Bot, Mail, Send
} from 'lucide-react';
import { VHSTape } from './components/VHSTape';
import { movies, Movie } from './data/movies';
import { makingStory } from './data/makingStory';

interface Letter {
  id: number;
  from: string;
  content: string;
  date: string;
}


const CATEGORIES = ['전체', '술 한잔 생각나는 밤', '사랑이 서툴렀던 시절', '영문학도의 시선'];

// 필름 스트립 장식
function FilmStrip() {
  const colors = ['#f97316', '#fbbf24', '#84cc16', '#22d3ee', '#a78bfa', '#f97316', '#fbbf24', '#84cc16', '#22d3ee'];
  return (
    <div className="flex h-2 w-full overflow-hidden">
      {colors.map((c, i) => (
        <div key={i} className="flex-1" style={{ backgroundColor: c, opacity: 0.5 }} />
      ))}
    </div>
  );
}

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showMakingStory, setShowMakingStory] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredMovies =
    activeCategory === '전체' ? movies : movies.filter(m => m.category === activeCategory);


  // 신청란 state
  const [letters, setLetters] = useState<Letter[]>([
    { id: 1, from: "지나가던 행인", content: "팀장님, 이런 감성적인 면이 있으신 줄 몰랐어요. 글 잘 읽고 갑니다.", date: "2024.03.15" },
    { id: 2, from: "영화광", content: "서유쌍기 리뷰 너무 공감돼요. 뽀이뽀로미 ㅋㅋ 저도 울었습니다.", date: "2024.03.14" }
  ]);
  const [newLetterFrom, setNewLetterFrom] = useState("");
  const [newLetterContent, setNewLetterContent] = useState("");

  const handleSendLetter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLetterFrom.trim() || !newLetterContent.trim()) return;
    setLetters([{
      id: Date.now(),
      from: newLetterFrom,
      content: newLetterContent,
      date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
    }, ...letters]);
    setNewLetterFrom("");
    setNewLetterContent("");
  };

  const goHome = () => { setSelectedMovie(null); window.scrollTo(0, 0); };


  return (
    <div className="min-h-screen bg-paper text-ink font-serif pb-20 transition-colors duration-500">

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-paper/70 backdrop-blur-md z-50 flex items-center justify-between px-4 transition-all duration-300">
        <div className="flex items-center gap-2 cursor-pointer" onClick={goHome}>
          <div className="bg-brand text-white p-1 rounded-sm shadow-sm">
            <Tv size={16} />
          </div>
          <span className="text-lg font-bold font-retro text-ink tracking-tight">
            짤래무비방
          </span>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-ink">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* ── Menu overlay ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-14 left-0 right-0 bg-paper border-b border-orange-100 z-40 shadow-xl p-4"
          >
            <nav className="flex flex-col gap-3 font-retro text-base">
              {[
                { href: "#shelf", icon: <Film className="text-orange-700" size={16} />, label: "비디오 선반" },
                { href: "#desk", icon: <PenTool className="text-orange-700" size={16} />, label: "작가의 책상" },
                { href: "#guestbook", icon: <Mail className="text-orange-700" size={16} />, label: "신청란 & 낙서장" },
                { href: "#profile", icon: <User className="text-orange-700" size={16} />, label: "주인장 소개" },
              ].map(item => (
                <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-2 hover:bg-orange-50 rounded-lg transition-colors text-[#2c2c2c]">
                  {item.icon} {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════
          WELCOME AREA — 수제 클레이 감성
      ══════════════════════════════════ */}
      {!selectedMovie && (
        <section className="relative pt-20 pb-8 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6"
          >
            <p className="font-handwriting text-4xl md:text-5xl text-ink font-bold leading-snug mb-5">
              어이,<br />영화 한 편<br />보고 갈래?
            </p>
            <p className="font-serif text-sm text-stone-500 leading-relaxed mb-6 max-w-xs mx-auto">
              1998년 동네 비디오 가게처럼,<br />좋아하는 영화 몇 편을 모아뒀습니다.
            </p>
            <p className="font-mono text-xs text-stone-400 uppercase tracking-widest flex flex-col items-center gap-1">
              <span>짤래무비방</span>
              <span>Handmade Clay & Essays</span>
            </p>
          </motion.div>
        </section>
      )}

      {/* ── Main ── */}
      <main className="px-4 max-w-2xl mx-auto">

        {/* ══ 비디오 선반 ══ */}
        {!selectedMovie && (
          <section id="shelf" className="pt-8 mb-12">
            <h3 className="text-lg font-bold font-retro flex items-center gap-2 mb-4">
              <Tv size={18} className="text-orange-700" />
              비디오 선반
            </h3>

            {/* 취향별 분류 탭 */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 -mx-4 px-4 mb-4">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-3 py-1 rounded-full text-xs border transition-all shrink-0 font-retro ${activeCategory === cat
                    ? 'bg-orange-700 text-white border-orange-700'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-orange-300'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* VHS 테이프들 */}
            <div className="flex overflow-x-auto gap-4 pb-6 -mx-4 px-4 scrollbar-hide snap-x">
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie, idx) => {
                  const tilts = [-2.5, 1.5, -1, 2, -1.8, 1.2];
                  const tilt = tilts[idx % tilts.length];
                  return (
                    <div
                      key={movie.id}
                      className="snap-center transition-transform duration-300 hover:rotate-0 flex flex-col items-center gap-1"
                      style={{ transform: `rotate(${tilt}deg)` }}
                      onClick={() => setSelectedMovie(movie)}
                    >
                      <VHSTape {...movie} />
                      {movie.ownerNote && (
                        <span className="font-handwriting text-[11px] text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-sm shadow-sm whitespace-nowrap">
                          {movie.ownerNote}
                        </span>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="flex items-center justify-center w-full py-16 text-gray-400 text-sm font-retro">
                  아직 이 서재엔 없는 영화입니다.
                </div>
              )}
            </div>
          </section>
        )}

        {/* ══ 작가의 책상 / 에세이 ══ */}
        <section id="desk" className="min-h-[10vh] mb-12">
          <AnimatePresence mode="wait">
            {selectedMovie ? (
              /* 에세이 상세 — 원고지 질감 */
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <button
                  onClick={() => setSelectedMovie(null)}
                  className="my-4 text-sm text-gray-400 flex items-center gap-1 hover:text-orange-700 transition-colors"
                >
                  ← 목록으로 돌아가기
                </button>

                <article className="overflow-hidden shadow-lg rounded-lg border border-gray-100">
                  {/* 씬 히어로 — 높이 증가 */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={selectedMovie.sceneUrl}
                      alt={selectedMovie.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* 제목 블록 — 영화 color 배경 */}
                  <div className="px-5 pt-5 pb-6" style={{ backgroundColor: selectedMovie.color }}>
                    <span className="text-[9px] font-mono uppercase tracking-widest opacity-80 text-white">
                      {selectedMovie.category}
                    </span>
                    <h1 className="text-2xl font-serif font-black text-white leading-snug mt-1 mb-2">
                      {selectedMovie.essayTitle}
                    </h1>
                    {/* ratingSticker → 부제(deck) */}
                    <p className="text-sm text-white/70 font-retro mb-4">{selectedMovie.ratingSticker}</p>
                    {/* 날짜 */}
                    <div className="flex items-center">
                      <span className="text-xs text-white/50 font-mono">{selectedMovie.date}</span>
                    </div>
                  </div>

                  {/* 에세이 본문 */}
                  <div className="paper-lined px-6 py-8">
                    {/* 포스터 + 원제 */}
                    <div className="flex gap-4 mb-6 not-prose">
                      <img
                        src={selectedMovie.posterUrl}
                        alt="poster"
                        className="w-16 h-24 object-cover rounded-md shadow-md border border-amber-200/80 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col justify-center">
                        <p className="text-xs text-gray-400 font-mono">{selectedMovie.originalTitle}</p>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">{selectedMovie.year} · Dir. {selectedMovie.director}</p>
                      </div>
                    </div>

                    {/* 명대사 */}
                    {selectedMovie.quote && (
                      <blockquote className="border-l-2 border-orange-700/50 pl-4 italic text-gray-500 mb-6 font-serif font-semibold text-sm not-prose">
                        "{selectedMovie.quote}"
                      </blockquote>
                    )}

                    {/* 에세이 본문 */}
                    <div
                      className="essay-body"
                      dangerouslySetInnerHTML={{ __html: selectedMovie.essayContent }}
                    />

                    {/* 태그 */}
                    <div className="mt-8 pt-4 border-t border-amber-300/40 flex flex-wrap gap-2 not-prose">
                      {selectedMovie.tags.map(tag => (
                        <span key={tag} className="text-xs text-gray-400 font-mono">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </motion.div>

            ) : (
              /* 에세이 목록 */
              <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 className="text-lg font-bold font-retro mb-4 flex items-center gap-2">
                  <PenTool size={18} className="text-orange-700" />
                  작가의 책상 (Essays)
                </h3>
                <div className="space-y-4">
                  {movies.map((movie, idx) => (
                    <div
                      key={movie.id}
                      onClick={() => setSelectedMovie(movie)}
                      className={`bg-white p-4 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 border-2 border-orange-50 cursor-pointer transition-all duration-300 transform ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0`}
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={movie.posterUrl}
                          alt="poster"
                          className="w-12 h-16 object-cover rounded-xl shadow-sm border border-orange-100 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-mono text-brand uppercase tracking-wider font-bold">
                            {movie.category}
                          </span>
                          <h4 className="font-bold text-lg font-serif text-ink leading-snug mt-0.5">
                            {movie.essayTitle}
                          </h4>
                          <p className="text-xs text-ink-muted mt-0.5">{movie.title} ({movie.year})</p>
                        </div>
                        <ChevronRight size={18} className="text-orange-300 shrink-0 mt-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ══ 주인장 소개 ══ */}
        {!selectedMovie && (
          <section id="profile" className="mb-12">
            <h3 className="text-lg font-bold font-retro mb-4 flex items-center gap-2">
              <User size={18} className="text-orange-700" />
              주인장 소개
            </h3>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              {/* VHS 테이프 레이블 스타일 헤더 */}
              <div className="bg-orange-700 px-5 py-2.5 flex items-center justify-between">
                <span className="text-white text-xs font-mono uppercase tracking-widest opacity-80">
                  Profile · 장태준 / Jjal-lae
                </span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-white/30 rounded-full" />
                  ))}
                </div>
              </div>

              <div className="p-6">
                {/* 사진 + 기본 정보 */}
                <div className="flex gap-4 mb-6">
                  {/* 어린 시절 */}
                  <div className="text-center shrink-0">
                    <div
                      className="w-20 h-24 bg-amber-50 border-2 border-amber-200 flex flex-col items-center justify-center rounded-md shadow-md mb-1 overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                      style={{ transform: 'rotate(-2deg)' }}
                    >
                      <span className="text-3xl">📺</span>
                      <span className="text-[8px] text-amber-600 font-mono mt-1">주말의 명화</span>
                    </div>
                    <p className="text-[9px] text-gray-400 font-mono">1990년대</p>
                  </div>

                  <div className="flex items-center text-gray-300 pb-5">
                    <ChevronRight size={18} />
                  </div>

                  {/* 지금 */}
                  <div className="text-center shrink-0">
                    <div
                      className="w-20 h-24 bg-gray-50 border-2 border-gray-200 flex flex-col items-center justify-center rounded-md shadow-md mb-1 hover:scale-105 transition-transform cursor-pointer"
                      style={{ transform: 'rotate(1.5deg)' }}
                    >
                      <span className="text-3xl">📚</span>
                      <span className="text-[8px] text-gray-500 font-mono mt-1">팀장 · 영문학도</span>
                    </div>
                    <p className="text-[9px] text-gray-400 font-mono">2020년대</p>
                  </div>

                  {/* 한 줄 서사 */}
                  <div className="flex-1 pl-1 flex flex-col justify-center">
                    <p className="font-serif text-sm text-gray-600 leading-relaxed">
                      어릴 때 주말마다<br />동네 비디오 가게를<br />기다리던 아이였습니다.
                    </p>
                    <p className="font-serif text-sm text-gray-400 mt-2">
                      마흔이 된 지금,<br />그 기억을 기록합니다.
                    </p>
                  </div>
                </div>

                {/* 오늘의 추천 */}
                <div className="bg-orange-50 border border-orange-200 rounded-md px-4 py-3 mb-5" style={{ transform: 'rotate(-0.5deg)' }}>
                  <p className="text-[10px] font-mono text-orange-400 uppercase tracking-widest mb-1">사장님 오늘의 추천</p>
                  <p className="font-handwriting text-base text-orange-800 leading-snug">
                    "박하사탕은 혼자 보지 마세요.<br />보고 나면 한동안 말이 없어집니다."
                  </p>
                </div>

                {/* 스토리텔링 */}
                <div className="border-t border-gray-100 pt-5 space-y-3 text-sm text-gray-600 leading-relaxed">
                  <p>
                    어린 시절 주말의 명화를 기다리던 소년이, 이제는 마흔이 되어 기록하는 영화와 삶의 이야기.
                  </p>
                  <p>
                    영문학을 전공했고, 지금은 회사에서 팀장을 맡고 있습니다. 카카오톡 단톡방에서 소비되고 흩어지는 취향이 아깝다고 생각했습니다. 그래서 이 공간을 만들었습니다.
                  </p>
                  <p>
                    장르보다는 감정으로, 줄거리보다는 장면 하나로 영화를 기억하는 편입니다.
                    이 서재에는 그런 영화들만 꽂혀 있습니다.
                  </p>
                  <p className="text-xs text-stone-500 font-serif pt-1">
                    비디오 가게는 사라졌지만, 그 감성만은 여기에.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ══ 희망 비디오 신청란 & 낙서장 ══ */}
        {!selectedMovie && (
          <section id="guestbook" className="mb-12">
            <h3 className="text-lg font-bold font-retro mb-4 flex items-center gap-2">
              <span className="text-orange-700">📼</span>
              희망 비디오 신청란 &amp; 낙서장
            </h3>

            <div className="rounded-lg overflow-hidden border border-amber-300/60 shadow-md">
              {/* 헤더 */}
              <div className="notebook-paper px-5 py-3 border-b border-amber-300/40">
                <p className="text-xs text-stone-600 font-serif">
                  주인장에게 하고 싶은 말, 보고 싶은 영화, 지나가는 인사 — 다 여기에 남겨두세요.
                </p>
              </div>

              {/* 폼 */}
              <form onSubmit={handleSendLetter} className="notebook-paper px-5 py-5 border-b border-amber-300/40">
                <input
                  type="text"
                  value={newLetterFrom}
                  onChange={e => setNewLetterFrom(e.target.value)}
                  placeholder="이름 / 별명"
                  className="w-full px-0 py-1 bg-transparent border-0 border-b border-orange-200 text-sm focus:outline-none focus:border-orange-500 font-handwriting text-gray-800 placeholder-stone-400 mb-3"
                />
                <textarea
                  value={newLetterContent}
                  onChange={e => setNewLetterContent(e.target.value)}
                  placeholder="낙서를 남겨주세요..."
                  rows={3}
                  className="w-full px-0 py-1 bg-transparent border-0 text-md focus:outline-none font-handwriting text-gray-800 placeholder-stone-400 resize-none leading-[24px] block"
                />
                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-1 text-xs text-orange-700 font-bold border border-orange-600/50 px-3 py-1.5 rounded hover:bg-orange-50 transition-colors"
                  >
                    <Send size={11} /> 남기기
                  </button>
                </div>
              </form>

              {/* 목록 */}
              <div className="notebook-paper divide-y divide-amber-200/50">
                {letters.map((letter, i) => (
                  <div key={letter.id} className="px-5 py-4 flex gap-3">
                    <span className="text-[10px] font-mono text-amber-400/50 w-5 shrink-0 pt-1">
                      {String(letters.length - i).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-handwriting font-bold text-gray-700">{letter.from}</span>
                        <span className="text-[9px] font-mono text-gray-300">{letter.date}</span>
                      </div>
                      <p className="text-sm font-handwriting text-gray-600 leading-relaxed">{letter.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══ AI Mate 메이킹 스토리 ══ */}
        {!selectedMovie && (
          <section id="making-story" className="mb-16">
            <div
              onClick={() => setShowMakingStory(!showMakingStory)}
              className="cursor-pointer group flex items-center justify-center gap-2 text-gray-400 hover:text-orange-700 transition-colors mb-4"
            >
              <Bot size={14} />
              <span className="text-xs font-mono tracking-wider">PROJECT: AI MATE</span>
              <ChevronRight size={12} className={`transform transition-transform ${showMakingStory ? 'rotate-90' : ''}`} />
            </div>
            <AnimatePresence>
              {showMakingStory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-inner">
                    <h3 className="text-base font-bold font-retro text-gray-800 mb-1">{makingStory.title}</h3>
                    <p className="text-sm text-orange-700 font-medium mb-4">{makingStory.subtitle}</p>
                    <div
                      className="prose prose-stone prose-sm prose-p:text-gray-600 leading-relaxed font-serif"
                      dangerouslySetInnerHTML={{ __html: makingStory.content }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* Footer */}
        {!selectedMovie && (
          <footer className="pt-8 pb-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400 font-mono">
              짤래무비방 · Since 1984 · Seoul, Korea
            </p>
          </footer>
        )}
      </main>

      {/* ── 하단 네비 ── */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#fdfbf7]/95 backdrop-blur-md border-t border-gray-200 pb-safe pt-2 px-6 flex justify-between items-center h-16 z-50">
        {[
          { label: '홈', icon: <Tv size={20} />, action: goHome },
          { label: '비디오', icon: <Film size={20} />, action: () => { goHome(); setTimeout(() => document.getElementById('shelf')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
          { label: '에세이', icon: <PenTool size={20} />, action: () => { goHome(); setTimeout(() => document.getElementById('desk')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
          { label: '신청란', icon: <Mail size={20} />, action: () => { goHome(); setTimeout(() => document.getElementById('guestbook')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
          { label: '소개', icon: <User size={20} />, action: () => { goHome(); setTimeout(() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
        ].map(item => (
          <button
            key={item.label}
            onClick={item.action}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-orange-700 transition-colors"
          >
            {item.icon}
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
