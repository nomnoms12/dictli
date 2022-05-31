interface Translation {
    en: string,
    ru: string,
}

interface Dictionary {
    id: number,
    title: string,
}

interface FilledDictionary extends Dictionary {
    translations: Translation[],
}

type Language = 'en' | 'ru';

export {Dictionary, FilledDictionary, Language};
