import './globals.css';
import Image from 'next/image';
import projetos from '@/data/projetos.json';

export default function Home() {
  return (
    <div className="p-4 m-2 sm:p-6 text-base leading-relaxed bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen" id="content">

      {/* Seção Hero */}
      <div
        id="hero"
        className="relative flex flex-col md:flex-row items-center justify-between min-h-[600px] max-w-full mx-auto p-8 sm:px-6 sm:py-0 mb-[80px] bg-white dark:bg-gray-900"
      >
        {/* Imagem de fundo absoluta com blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-imagem.webp"
            alt="Ilustração de desenvolvimento web"
            fill
            style={{ objectFit: 'cover', filter: 'blur(3px)' }}
            priority
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>
        </div>

        {/* Conteúdo do texto Hero - lado esquerdo */}
        <div className="max-w-xl text-left relative z-10 md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight text-white!">
            Transforme sua ideia em presença digital
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-300!">
            Criação de sites e sistemas sob medida para o seu negócio crescer com profissionalismo e tecnologia.
          </p>
          <a
            href="https://wa.me/5563992687714"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 transition-colors font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            Vamos Conversar no WhatsApp
          </a>
        </div>

        {/* Serviços - lado direito */}
        <div className="relative z-10 mt-8 md:mt-0 md:w-1/2 flex flex-col gap-4">

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                titulo: 'Sites Profissionais',
                desc: 'Moderno, responsivo e otimizado para SEO, para fortalecer sua marca.',
              },
              {
                titulo: 'Sistemas de Gestão',
                desc: 'Ferramentas sob medida para agilizar controle e aumentar a produtividade.',
              },
              {
                titulo: 'Landing Pages',
                desc: 'Projetadas para captar leads qualificados e gerar vendas.',
              },
            ].map((servico) => (
              <div
                key={servico.titulo}
                className="bg-[rgba(255,255,255,0.15)] dark:bg-[rgba(20,20,20,0.6)] text-white! p-4 rounded-xl shadow border border-white/30 hover:shadow-lg transition"
              >
                <h3 className="text-md font-semibold mb-1 text-white!">{servico.titulo}</h3>
                <p className="text-ls text-gray-300!">{servico.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Seção Sobre Mim */}
      <div className="flex flex-col md:flex-row mt-5 items-center justify-center gap-8" id="sobre">
        <Image
          src="/imagem.svg"
          alt="Imagem de Isaac Alves Andrade"
          className="rounded-xl w-full md:w-96 shadow-lg"
          width={20}
          height={20}
        />

        <div className="flex flex-col max-w-xl text-center md:text-left">
          <p id="title" className="text-xs text-gray-500 dark:text-gray-400 tracking-widest font-semibold mb-2">SOBRE MIM</p>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Isaac Alves Andrade</h1>
          <p className="text-gray-700 dark:text-gray-300 text-justify md:text-left">
            Sou um desenvolvedor web. Atualmente, estou cursando o terceiro ano do <b>técnico em Informática</b> integrado ao Ensino Médio no Instituto Federal do Tocantins (IFTO).
          </p>
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300 text-justify md:text-left">
            Desde 2023, venho estudando desenvolvimento web. Tenho experiência com <b>HTML</b>, <b>CSS</b>, <b>Tailwind CSS</b>, <b>JavaScript</b>, <b>TypeScript</b> e mais recentemente com <b>Nextjs</b>.
          </p>

          <a
            href="https://wa.me/5563992687714"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200 w-fit self-center md:self-start text-sm font-medium"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      {/* Seção Tecnologias */}
      <div className="flex flex-col mt-12 px-2 sm:px-4" id="tecnologias">
        <p id="title" className="text-xs text-gray-500 dark:text-gray-400 tracking-widest font-semibold mb-4 text-center">TECNOLOGIAS</p>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-3">
          {[
            { src: '/html.png', alt: 'HTML logo', name: 'HTML' },
            { src: '/css.png', alt: 'CSS logo', name: 'CSS' },
            { src: '/tailwind.png', alt: 'Tailwind CSS logo', name: 'Tailwind' },
            { src: '/js.svg', alt: 'JavaScript logo', name: 'JavaScript' },
            { src: '/typescript.png', alt: 'TypeScript logo', name: 'TypeScript' },
            { src: '/nextjs.svg', alt: 'Next.js logo', name: 'Next' },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 border rounded-xl border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-3 py-1"
            >
              <Image
                src={tech.src}
                alt={tech.alt}
                className="w-6 h-6 object-contain"
                width={24}
                height={24}
              />
              <p className="text-sm font-medium whitespace-nowrap">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Seção Projetos */}
      <div className="py-10 px-4" id="projetos">
        <p id="title" className="text-xs text-gray-500 dark:text-gray-400 tracking-widest font-semibold mb-4 text-center">PROJETOS</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {projetos.map((projeto, index) => (
            <a
              key={index}
              href="{projeto.link}"
              target="_blank"
              rel="noopener noreferrer"
              title={projeto.nome}
              className="group"
            >
              <div className="bg-[none] rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <Image
                  src={projeto.imagem}
                  alt={`Imagem do projeto ${projeto.nome}`}
                  width={500}
                  height={300}
                  className="w-full h-48 object-fit"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                    {projeto.nome}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
