import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './contexts/UsersContext';
import { QuestionsProvider } from './contexts/QuestionsContext';
import { AnswersProvider } from './contexts/AnswersContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AnswersProvider>
        <QuestionsProvider>
            <UsersProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </UsersProvider>
        </QuestionsProvider>
    </AnswersProvider>
);