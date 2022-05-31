import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {Dictionary, FilledDictionary, Language} from "./types";

interface DictionaryProps {
    dictionary: FilledDictionary,
    setDictionary: Dispatch<SetStateAction<FilledDictionary>>,
    language: Language,
    setLanguage: Dispatch<SetStateAction<Language>>,
}

function Dictionaries(props: DictionaryProps) {
    const currentDictionary = props.dictionary;
    const [dictionaries, setDictionaries] = useState<Dictionary[]>([]);
    const setDictionary = props.setDictionary;
    const language = props.language;
    const setLanguage = props.setLanguage;
    const fileInput = useRef<HTMLInputElement>(null);

    console.log(currentDictionary);
    console.log(dictionaries);

    useEffect(() => {
        axios.get('dictionary').then(r => {
            setDictionaries(r.data);
        });
    }, [currentDictionary]);

    const downloadDictionary = (id: string) => {
        axios.get(`dictionary/${id}`).then(r => {
            setDictionary(r.data);
        });
    }

    const uploadDictionary = () => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    }

    const selectOption = (event: ChangeEvent<HTMLSelectElement>) => {
        downloadDictionary(event.target.value);
    }

    const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (fileInput.current && fileInput.current.files && fileInput.current.files.length) {
            const selectedFile = fileInput.current.files[0];
            uploadFile(selectedFile);
        }
    }

    const uploadFile = (file: File) => {
        const formData = new FormData();
        formData.append('dictionary', file);

        axios.post('dictionary', formData)
            .then((r) => {
                console.log(r.data);
                setDictionary(r.data);
            })
            .catch(error => alert(error.response.data.message));
    }

    return (
        <div className="d-flex align-items-center">
            <div className="d-flex me-auto">
                <input type="file"
                       accept="text/csv"
                       ref={fileInput}
                       onChange={selectFile}
                       style={{display: "none"}}
                />
                <div className="input-group">
                    <button className="btn btn-secondary" onClick={uploadDictionary}>Загрузить словарь</button>
                    <select className="form-select" onChange={selectOption}>
                        <option disabled selected>Выбрать словарь</option>
                        {dictionaries.map((dictionary) => (
                            <option value={dictionary.id} selected={dictionary.id == currentDictionary.id}>
                                {dictionary.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="form-check form-switch">
                <label className="form-check-label">{"ENG -> RUS"}</label>
                <input onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                       checked={language === 'en'}
                       className="form-check-input"
                       type="checkbox"
                       role="switch"/>
            </div>
        </div>
    )
}

export default Dictionaries;
