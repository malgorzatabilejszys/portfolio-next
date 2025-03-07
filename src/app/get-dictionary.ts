import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  da: () => import("./dictionaries/da.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  return (dictionaries as any)[locale]()
}

