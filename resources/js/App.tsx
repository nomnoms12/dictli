import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Dictionaries from "./Dictionaries";
import {FilledDictionary, Language} from "./types";

function App() {
    const [index, setIndex] = useState<number>(0);
    const [dictionary, setDictionary] = useState<FilledDictionary>({id: 0, title: '', translations: []});
    const [language, setLanguage] = useState<Language>('en');
    const [view, setView] = useState<boolean>(false);

    const translations = dictionary.translations;
    const hasTranslations = translations.length > 0;
    const translation = translations[index % translations.length];

    const getNext = () => {
        setView(false);
        setIndex(index + 1);
    }

    return (
        <>
            <Header/>
            <main className="container py-5 h-100 d-flex flex-column justify-content-between">
                <Dictionaries dictionary={dictionary}
                              setDictionary={setDictionary}
                              language={language}
                              setLanguage={setLanguage}/>
                {hasTranslations &&
                    <div>
                        <h1>{translation[language]}</h1>
                        <h2 className="text-secondary">{view ? translation[language === 'en' ? 'ru' : 'en'] : '???????'}</h2>
                    </div>
                }
                {!hasTranslations &&
                    <div>
                        <h1>???????</h1>
                        <h2 className="text-secondary">???????</h2>
                    </div>
                }
                <div>
                    <button className="btn btn-outline-primary me-3" onClick={() => setView(true)}>Показать перевод</button>
                    <button className="btn  btn-outline-success" onClick={getNext}>Следующее слово</button>
                </div>
                <p>Текущий словарь: {dictionary.title} ({translations.length} слов)</p>
            </main>
            <Footer/>
        </>
    );
}

export default App;
