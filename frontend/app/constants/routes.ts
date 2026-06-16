export const ROUTES_IMAGES = {
    dashboard: "/images/banner_1.jpg",
} as const;

export const ROUTES_NAVBAR = {
    title: "Practica de Hooks",
    navBar:[
      {
        href: "/",
        title: "Inicio"
      },
      {
        href: "/useState",
        title: "useState",
        downBar: [
          {
            href: "/useState/easy",
            title: "easy"
          },
          {
            href: "/useState/middle",
            title: "middle"
          },
          {
            href: "/useState/hard",
            title: "hard"
          }
        ]
      },
      {
        href: "/useEffect",
        title: "useEffect",
        downBar: [
          {
            href: "/useEffect/easy",
            title: "easy"
          },
          {
            href: "/useEffect/middle",
            title: "middle"
          },
          {
            href: "/useEffect/hard",
            title: "hard"
          }
        ]
      }
    ]
} as const;