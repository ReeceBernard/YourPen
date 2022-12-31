import React, { use, useEffect, useState } from 'react';
import styles from '../styles/ContentForm.module.css';
import { Button } from 'semantic-ui-react';


type Tweet = string;
type Content = 'Linkedin Post' | 'Blog Article' | 'Video Script';
type Audience = 'Recruiters' | 'Software' | 'Engineers' | 'Entreprenuers' | 'Men' | 'Women' | 'Children'

interface InitialValues {
    contentType: Content;
    targetAudience: Audience;
    tweet: Tweet;
}

const INITIAL_VALUES: InitialValues = {
    contentType: 'Linkedin Post',
    targetAudience: 'Recruiters',
    tweet: '',
}
const GenerateContentForm = () => {

    const [contentType, setContentType] = useState<Content>(INITIAL_VALUES.contentType);
    const [desiredContentType, setDesiredContentType] = useState<Content>(INITIAL_VALUES.contentType)
    const [targetAudience, setTargetAudience] = useState<Audience>(INITIAL_VALUES.targetAudience);
    const [tweet, setTweet] = useState<Tweet>(INITIAL_VALUES.tweet);

    const handleSubmit = () => {
        console.log("Content Type:", contentType);
        console.log("Audience:", targetAudience);
        console.log("Tweet", tweet);
        console.log("Ending Content Type", desiredContentType)
        if (validateSubmit(contentType, targetAudience, tweet)) {
            console.log('lets send these variables to the backend')
        }
    }

    const validateSubmit = (contentType: Content, targetAudience: Audience, tweet: Tweet): boolean => {
        if (tweet.length > 9) {
            setContentType(INITIAL_VALUES.contentType);
            setTargetAudience(INITIAL_VALUES.targetAudience);
            setTweet(INITIAL_VALUES.tweet)
            return true;
        }
        alert("Tweet must be at least a few words.");
        return false;
    }
    return (
        <div className={styles.formContainer}>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Starting Content
                                        </label>
                                        <select
                                            id="content-type"
                                            name="content-type"
                                            autoComplete="conent-name"
                                            value={contentType}
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            onChange={(event) =>
                                                setContentType(event.target.value as Content)
                                            }
                                        >
                                            <option>Linkedin Post</option>
                                            <option>Blog Article</option>
                                            <option>Video Script</option>
                                            <option>Short Video Idea</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Desired Content
                                        </label>
                                        <select
                                            id="content-type"
                                            name="content-type"
                                            autoComplete="conent-name"
                                            value={contentType}
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            onChange={(event) =>
                                                setContentType(event.target.value as Content)
                                            }
                                        >
                                            <option>Linkedin Post</option>
                                            <option>Blog Article</option>
                                            <option>Video Script</option>
                                            <option>Short Video Idea</option>
                                        </select>
                                    </div>



                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="audience" className="block text-sm font-medium text-gray-700">
                                            Target Audience
                                        </label>
                                        <select
                                            id="audience"
                                            name="audience"
                                            value={targetAudience}
                                            autoComplete="audience-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            onChange={(event) =>
                                                setTargetAudience(event.target.value as Audience)
                                            }
                                        >
                                            <option>Recruiters</option>
                                            <option>Software Engineers</option>
                                            <option>Entreprenuers</option>
                                            <option>Instagram Models</option>
                                            <option>Men</option>
                                            <option>Women</option>
                                            <option>Children</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Language
                                        </label>
                                        <select
                                            disabled
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:cursor-not-allowed focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option>English</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="tweet-input" className="block border-gray-300 text-sm font-medium text-gray-700">
                                            Copy Your {contentType} Here
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={5}
                                                value={tweet}
                                                style={{ padding: '10pt' }}
                                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="you@example.com"
                                                defaultValue={''}
                                                onChange={(event) =>
                                                    setTweet(event.target.value as Tweet)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    className={styles.button}
                                    onClick={() => handleSubmit()}
                                >
                                    Generate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenerateContentForm;