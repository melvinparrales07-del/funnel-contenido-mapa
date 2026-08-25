const sidebarItems = [
  { label: "Feed", active: true },
  { label: "Cursos", active: false },
  { label: "Recursos", active: false },
  { label: "Retos", active: false },
  { label: "Miembros", active: false },
];

const courses = [
  { title: "Sistema de contenido", tag: "Módulo 01" },
  { title: "Tu primera oferta", tag: "Módulo 02" },
  { title: "Reto de ejecución", tag: "Reto" },
];

const feedPosts = [
  { name: "Camila R.", time: "hace 2h", text: "Publiqué mi primer reel usando el framework de la semana 🎉" },
  { name: "Diego M.", time: "hace 5h", text: "Cerré mi primer cliente de consultoría este mes." },
];

export function CommunityMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md select-none rounded-xl2 border border-border bg-bg-section p-3 shadow-soft sm:max-w-lg">
      <div className="flex items-center gap-1.5 pb-3 pl-1">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>

      <div className="grid grid-cols-[76px_1fr] gap-3 sm:grid-cols-[96px_1fr]">
        {/* Sidebar */}
        <div className="flex flex-col gap-1.5 rounded-lg bg-black/30 p-2">
          {sidebarItems.map((item) => (
            <div
              key={item.label}
              className={`rounded-md px-2 py-2 text-[10px] font-medium sm:text-xs ${
                item.active ? "bg-accent/15 text-accent" : "text-ink-dim"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Main area */}
        <div className="flex flex-col gap-3">
          {/* Course thumbnails */}
          <div className="grid grid-cols-3 gap-2">
            {courses.map((course) => (
              <div
                key={course.title}
                className="rounded-lg border border-border bg-black/30 p-2"
              >
                <div className="mb-2 h-8 w-full rounded bg-gradient-to-br from-accent/25 to-transparent sm:h-10" />
                <p className="text-[8px] font-semibold uppercase tracking-wide text-accent sm:text-[9px]">
                  {course.tag}
                </p>
                <p className="mt-0.5 line-clamp-2 text-[9px] leading-tight text-ink sm:text-[10px]">
                  {course.title}
                </p>
              </div>
            ))}
          </div>

          {/* Feed */}
          <div className="flex flex-col gap-2">
            {feedPosts.map((post) => (
              <div key={post.name} className="rounded-lg border border-border bg-black/30 p-2.5">
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-gradient-to-br from-accent/60 to-accent/10" />
                  <p className="text-[10px] font-semibold text-ink sm:text-xs">{post.name}</p>
                  <span className="text-[9px] text-ink-dim">{post.time}</span>
                </div>
                <p className="text-[10px] leading-snug text-ink-dim sm:text-xs">{post.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-x-8 -bottom-8 h-24 bg-accent/10 blur-3xl" />
    </div>
  );
}
