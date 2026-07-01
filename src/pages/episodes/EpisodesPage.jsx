import { Link } from "react-router-dom";

export const podcastEpisodes = [
  {
    id: 1,
    title: "Как стать Frontend-разработчиком в 2026 году",
    description:
      "Разбираем современный роадмап фронтенд-разработчика, востребованные технологии и советы по поиску первой работы.",
    host: "Александр Смирнов",
    guests: ["Иван Петров"],
    duration: 52 * 60, // секунды
    publishedAt: "2026-05-12T10:00:00Z",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618",
    audioUrl: "/audio/episode-1.mp3",
    episodeNumber: 1,
    season: 1,
    plays: 15432,
    likes: 1287,
    explicit: false,
    tags: ["React", "JavaScript", "Карьера"],
  },
  {
    id: 2,
    title: "React vs Vue: что выбрать новичку",
    description:
      "Сравниваем два популярных фреймворка и рассказываем, в каких случаях каждый из них подходит лучше.",
    host: "Александр Смирнов",
    guests: ["Елена Крылова"],
    duration: 47 * 60,
    publishedAt: "2026-05-19T10:00:00Z",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    audioUrl: "/audio/episode-2.mp3",
    episodeNumber: 2,
    season: 1,
    plays: 12894,
    likes: 973,
    explicit: false,
    tags: ["React", "Vue", "Frontend"],
  },
  {
    id: 3,
    title: "TypeScript без боли",
    description:
      "Обсуждаем типизацию, generics, utility types и реальные кейсы использования TypeScript.",
    host: "Александр Смирнов",
    guests: [],
    duration: 61 * 60,
    publishedAt: "2026-05-26T10:00:00Z",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    audioUrl: "/audio/episode-3.mp3",
    episodeNumber: 3,
    season: 1,
    plays: 18345,
    likes: 1756,
    explicit: false,
    tags: ["TypeScript", "JavaScript"],
  },
  {
    id: 4,
    title: "Архитектура Frontend-приложений",
    description:
      "Разбираем FSD, Clean Architecture и способы организации крупных проектов.",
    host: "Александр Смирнов",
    guests: ["Дмитрий Кузнецов"],
    duration: 56 * 60,
    publishedAt: "2026-06-02T10:00:00Z",
    category: "Архитектура",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    audioUrl: "/audio/episode-4.mp3",
    episodeNumber: 4,
    season: 1,
    plays: 9476,
    likes: 842,
    explicit: false,
    tags: ["FSD", "Architecture", "Clean Code"],
  },
  {
    id: 5,
    title: "Как проходит техническое собеседование",
    description:
      "Что спрашивают на интервью, как готовиться и какие ошибки допускают кандидаты.",
    host: "Александр Смирнов",
    guests: ["Максим Орлов"],
    duration: 49 * 60,
    publishedAt: "2026-06-09T10:00:00Z",
    category: "Карьера",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    audioUrl: "/audio/episode-5.mp3",
    episodeNumber: 5,
    season: 1,
    plays: 22387,
    likes: 2154,
    explicit: false,
    tags: ["Interview", "Career", "Frontend"],
  },
];

export default function EpisodesPage() {
  return (
    <div className="flex items-start flex-wrap justify-between gap-3 p-3">
      {podcastEpisodes.map((item) => (
        <Link key={item.id} to={`${item.id}`}>
          <img src={item.image} alt="" className="max-w-25 max-h-25" />

          <p className="max-w-25 max-h-25">{item.title}</p>
        </Link>
      ))}
    </div>
  );
}
