
const sections = [
  { key: "aperitivos", title: "Aperitivos", meta: "1 precio", kind: "single" },
  { key: "cafes", title: "Cafés", meta: "1 precio", kind: "single" },
  { key: "desayunos", title: "Desayunos", meta: "1 precio", kind: "single", wide: true },
  { key: "refrescos", title: "Refrescos", meta: "1 precio", kind: "single" },
  { key: "granizados", title: "Granizados", meta: "1 precio", kind: "single", compact: true },
  { key: "vinos", title: "Vinos", meta: "Copa", kind: "single", compact: true },
  { key: "vapers", title: "Vapers", meta: "Precio", kind: "single", compact: true },
  { key: "whisky", title: "Whisky", meta: "Chupito · Combinado", kind: "triple", wide: true },
  { key: "ron", title: "Ron", meta: "Combinados", kind: "single" },
  { key: "ginebra", title: "Ginebra", meta: "Combinados", kind: "single" },
  { key: "cervezas", title: "Cervezas", meta: "1 precio", kind: "single" },
  { key: "licores", title: "Licores", meta: "Chupito · Copa", kind: "triple", wide: true },
  { key: "conyacBrandy", title: "Coñac y Brandy", meta: "Chupito · Copa", kind: "triple" },
  { key: "vodka", title: "Vodka", meta: "Chupito · Combinado", kind: "triple" },
];

const menu = {
  "aperitivos": [
    {
      "name": "Patatas y Aceitunas",
      "price": "2.50 €"
    },
    {
      "name": "Patatas",
      "price": "1.50 €"
    },
    {
      "name": "Aceitunas",
      "price": "1.50 €"
    },
    {
      "name": "Sandwich Mixto",
      "price": "2.50 €"
    },
    {
      "name": "Bocadillo Chorizo y Queso",
      "price": "3.50 €"
    },
    {
      "name": "Bocadillo Salchichón y Queso",
      "price": "3.50 €"
    },
    {
      "name": "Bocadillo de Atún y Mayonesa",
      "price": "3.50 €"
    },
    {
      "name": "Bocadillo de Jamón y Queso",
      "price": "3.50 €"
    },
    {
      "name": "Pizza",
      "price": "6,00 €"
    }
  ],
  "cafes": [
    {
      "name": "Café/ Cortado",
      "price": "1,00 €"
    },
    {
      "name": "Con leche/Manchado/ Bombón/Americano",
      "price": "1.30 €"
    },
    {
      "name": "Belmonte de Terry o Magno / Carajillo",
      "price": "1,50 €"
    },
    {
      "name": "Belmonte Baileys",
      "price": "1,50 €"
    },
    {
      "name": "Manwhi/ Tewhi",
      "price": "1,50 €"
    },
    {
      "name": "Asiático",
      "price": "2.30 €"
    },
    {
      "name": "Infusión",
      "price": "1,00 €"
    },
    {
      "name": "Infusiones Especiales",
      "price": "1,50 €"
    },
    {
      "name": "Cola Cao",
      "price": "1,50 €"
    }
  ],
  "desayunos": [
    {
      "name": "1/2 Tostada sola",
      "price": "2.00 €"
    },
    {
      "name": "1/2 Tostada + Café*",
      "price": "2.50 €"
    },
    {
      "name": "1/2 Tostada + zumo/refresco",
      "price": "3,00 €"
    },
    {
      "name": "1/2 Tostada atún sola",
      "price": "2.50 €"
    },
    {
      "name": "1/2 Tostada atún + Café*",
      "price": "3.00 €"
    },
    {
      "name": "1/2 Tostada atún + zumo/refresco",
      "price": "4.00 €"
    },
    {
      "name": "1/2 Tostada jamón",
      "price": "2.50 €"
    },
    {
      "name": "1/2 Tostada jamón + zumo/refresco",
      "price": "4.00 €"
    },
    {
      "name": "Napolitana/ Croissant",
      "price": "2.00 €"
    },
    {
      "name": "Donuts",
      "price": "2.00 €"
    },
    {
      "name": "Muffins",
      "price": "2.00 €"
    },
    {
      "name": "Croissant jamón York y queso",
      "price": "2.00 €"
    }
  ],
  "refrescos": [
    {
      "name": "Agua Pequeña",
      "price": "1,00 €"
    },
    {
      "name": "Agua Grande",
      "price": "2.00 €"
    },
    {
      "name": "Refrescos",
      "price": "1,50 €"
    },
    {
      "name": "Zumo",
      "price": "1,50 €"
    },
    {
      "name": "Zumo de Naranja Natural",
      "price": "2,00 €"
    },
    {
      "name": "Batido de Chocolate",
      "price": "1.50 €"
    },
    {
      "name": "Tinto de Verano",
      "price": "1,50 €"
    },
    {
      "name": "RedBull",
      "price": "2,50 €"
    }
  ],
  "granizados": [
    {
      "name": "Pequeño",
      "price": "2,00 €"
    },
    {
      "name": "Grande",
      "price": "3,00 €"
    }
  ],
  "vinos": [
    {
      "name": "Tinto",
      "price": "2,00 €"
    },
    {
      "name": "Blanco",
      "price": "2,00 €"
    },
    {
      "name": "Rosado",
      "price": "2,00 €"
    }
  ],
  "vapers": [
    {
      "name": "Vapers",
      "price": "7.00€"
    }
  ],
  "whisky": [
    {
      "name": "JB",
      "price1": "2.00 €",
      "price2": "6,00 €"
    },
    {
      "name": "White Label",
      "price1": "2.00 €",
      "price2": "6,00 €"
    },
    {
      "name": "DYC",
      "price1": "2.00 €",
      "price2": "6,00 €"
    },
    {
      "name": "Ballantines",
      "price1": "2.00 €",
      "price2": "6,00 €"
    },
    {
      "name": "Jack Daniels",
      "price1": "2,50 €",
      "price2": "6,50 €"
    },
    {
      "name": "Johnnie Walker Red",
      "price1": "2,50 €",
      "price2": "6,00 €"
    },
    {
      "name": "Johnnie Walker Black Label",
      "price1": "2,50 €",
      "price2": "6,50 €"
    },
    {
      "note": "* con RedBull + 1,00€"
    }
  ],
  "ron": [
    {
      "name": "Barceló",
      "price": "6,00 €"
    },
    {
      "name": "Brugal",
      "price": "6,00 €"
    },
    {
      "name": "Bacardi Superior/Santa Teresa",
      "price": "6,00 €"
    },
    {
      "name": "Chupito de Ron*",
      "price": "2.00 €"
    },
    {
      "note": "* con RedBull + 1,00€"
    }
  ],
  "ginebra": [
    {
      "name": "Larios",
      "price": "6,00 €"
    },
    {
      "name": "Larios 12",
      "price": "6,00 €"
    },
    {
      "name": "Seagram",
      "price": "6,00 €"
    },
    {
      "name": "Beefeater",
      "price": "6,00 €"
    },
    {
      "name": "Bombay Dry",
      "price": "6,00 €"
    },
    {
      "name": "Puerto de Indias / Strawberry",
      "price": "6,00 €"
    },
    {
      "name": "Bombay Sapphire",
      "price": "6,00 €"
    },
    {
      "note": "* con RedBull + 1,00€"
    }
  ],
  "cervezas": [
    {
      "name": "1/3 Estrella Levante/ Damm",
      "price": "1,50 €"
    },
    {
      "name": "1/5 Estrella Levante",
      "price": "1,00 €"
    },
    {
      "name": "1/3 Carlsberg",
      "price": "2,00 €"
    },
    {
      "name": "1/3 Verna",
      "price": "1,50 €"
    },
    {
      "name": "1/3 Sin Alcohol",
      "price": "1,50 €"
    },
    {
      "name": "1/3 Duria Sin Gluten",
      "price": "1,50 €"
    },
    {
      "name": "1/3 Punta Este",
      "price": "1,50 €"
    },
    {
      "name": "1/3 Coronita",
      "price": "3,00 €"
    },
    {
      "name": "1/3 Salitos",
      "price": "3,00 €"
    }
  ],
  "licores": [
    {
      "name": "Orujo de Hierbas",
      "price1": "1,50 €",
      "price2": "2,50 €"
    },
    {
      "name": "Crema de Orujo",
      "price1": "1,50 €",
      "price2": "2,50 €"
    },
    {
      "name": "Tequila Jose Cuervo",
      "price1": "2,00 €",
      "price2": "4,00 €"
    },
    {
      "name": "Ponche Caballero",
      "price1": "1,50 €",
      "price2": "2,50 €"
    },
    {
      "name": "Baileys",
      "price1": "1,50 €",
      "price2": "2,50 €"
    },
    {
      "name": "Pacharan",
      "price1": "1,50 €",
      "price2": "2,50 €"
    },
    {
      "name": "Jägermeister",
      "price1": "2,00 €",
      "price2": "4,00 €"
    },
    {
      "name": "Martini",
      "price1": "1.50 €",
      "price2": "2,50 €"
    },
    {
      "name": "Marie Brizard Peppermint",
      "price1": "1,50 €",
      "price2": "2,50 €"
    },
    {
      "name": "Licor 43",
      "price1": "1,50 €",
      "price2": "2,50 €"
    },
    {
      "name": "Cazalla",
      "price1": "1.50 €",
      "price2": "2.50 €"
    }
  ],
  "conyacBrandy": [
    {
      "name": "Terry",
      "price1": "1,50 €",
      "price2": "2,50 €"
    },
    {
      "name": "Magno",
      "price1": "1,50 €",
      "price2": "2,50 €"
    },
    {
      "name": "Anís Dulce/Seco",
      "price1": "1,50 €",
      "price2": "2,50 €"
    }
  ],
  "vodka": [
    {
      "name": "Absolut",
      "price1": "2.00 €",
      "price2": "6,00 €"
    },
    {
      "name": "Eristoff",
      "price1": "2.00 €",
      "price2": "6,00 €"
    },
    {
      "note": "* con RedBull + 1,00€"
    }
  ]
};

function SingleRows({ items }) {
  return (
    <div className="space-y-2">
      {items.map((item, index) =>
        item.note ? (
          <div key={index} className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-white">
            {item.note}
          </div>
        ) : (
          <div key={index} className="flex items-center justify-between gap-3 border-b border-white/10 py-3 last:border-b-0">
            <div className="pr-3 leading-snug text-white/95">{item.name}</div>
            <div className="shrink-0 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-bold text-white">
              {item.price}
            </div>
          </div>
        )
      )}
    </div>
  );
}

function TripleRows({ items, label1, label2 }) {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-[1fr_78px_78px] gap-2 border-b border-white/10 pb-3 text-[11px] uppercase tracking-[0.2em] text-white/45">
        <span></span>
        <span className="text-center">{label1}</span>
        <span className="text-center">{label2}</span>
      </div>
      {items.map((item, index) =>
        item.note ? (
          <div key={index} className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-white">
            {item.note}
          </div>
        ) : (
          <div key={index} className="grid grid-cols-[1fr_78px_78px] items-center gap-2 border-b border-white/10 py-3 last:border-b-0">
            <div className="pr-2 leading-snug text-white/95">{item.name}</div>
            <div className="rounded-full border border-white/10 bg-white/10 px-2 py-2 text-center text-sm font-bold text-white">
              {item.price1}
            </div>
            <div className="rounded-full border border-white/10 bg-white/10 px-2 py-2 text-center text-sm font-bold text-white">
              {item.price2}
            </div>
          </div>
        )
      )}
    </div>
  );
}

function Card({ section, index }) {
  const items = menu[section.key];
  const span = section.wide
    ? "md:col-span-2"
    : section.compact
      ? "md:col-span-1"
      : "md:col-span-1";

  return (
    <section
      id={section.key}
      className={`rounded-[28px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl ${span}`}
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-2 text-xs font-bold tracking-[0.3em] text-red-500">{String(index + 1).padStart(2, "0")}</div>
          <h2 className="text-2xl font-bold tracking-tight text-white">{section.title}</h2>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-white/55">
          {section.meta}
        </div>
      </div>

      {section.kind === "triple" ? (
        <TripleRows
          items={items}
          label1={section.meta.includes("Copa") ? "Chupito" : "Chupito"}
          label2={section.meta.includes("Copa") ? "Copa" : "Combinado"}
        />
      ) : (
        <SingleRows items={items} />
      )}
    </section>
  );
}

export default function LandingTikiTaka() {
  return (
    <div className="min-h-screen bg-[#050505] text-white [background-image:radial-gradient(circle_at_12%_12%,rgba(228,0,43,0.16),transparent_22%),radial-gradient(circle_at_85%_8%,rgba(228,0,43,0.12),transparent_24%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:auto,auto,44px_44px,44px_44px]">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="grid gap-6 p-5 md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_6px_rgba(239,68,68,0.12)]"></span>
                Carta digital premium
              </div>
              <h1 className="max-w-[8ch] text-5xl font-extrabold leading-none tracking-[-0.08em] sm:text-7xl">
                La carta de Tiki Taka
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                Una landing limpia, elegante y optimizada para móvil, pensada para verse perfecta al escanear el QR.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white">
                  <span className="font-bold">Horario</span> 6:00 AM — 3:00 AM
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white">
                  <span className="font-bold">Días</span> Todos los días
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white">
                  <span className="font-bold">Estilo</span> Premium · limpio · moderno
                </div>
              </div>
            </div>

            <div className="relative rounded-[30px] border border-white/10 bg-white/[0.05] p-5">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/20 blur-3xl"></div>
              <img
                src="data:image/png;base64,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AACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQnsABAAAApCdwAAAAAOkJHAAAAEB6AgcAAACQ3v8Dj5R2+StkPjEAAAAASUVORK5CYII="
                alt="Logo Tiki Taka"
                className="relative z-10 mx-auto w-full max-w-[340px]"
              />
              <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/45">Carta</div>
                  <div className="font-semibold">Visual premium para QR</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/45">Identidad</div>
                  <div className="font-semibold">Negro · blanco · rojo</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/45">Tipografía</div>
                  <div className="font-semibold">Funnel Sans</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/45">Formato</div>
                  <div className="font-semibold">Una sola página</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav className="sticky top-4 z-20 mt-5 flex gap-2 overflow-x-auto rounded-full border border-white/10 bg-black/70 p-2 backdrop-blur-xl">
          {sections.map((section, index) => (
            <a
              key={section.key}
              href={`#${section.key}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-transparent bg-white/5 px-4 py-3 text-sm text-white/70 transition hover:border-white/10 hover:bg-white/10 hover:text-white"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-red-500 text-[11px] font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.title}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Carta completa</h2>
            <p className="mt-3 max-w-3xl text-white/65">
              El contenido y los precios se presentan respetando la carta original, con una estructura visual más atractiva y mucho más legible para móvil.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section, index) => (
            <Card key={section.key} section={section} index={index} />
          ))}
        </div>

        <footer className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/60">
          <span className="font-semibold text-white">Tiki Taka</span> · Abierto todos los días de 6:00 AM a 3:00 AM
        </footer>
      </div>
    </div>
  );
}
