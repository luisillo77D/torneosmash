import React, { useState } from 'react';
import Info from './info.tsx';
import ComponenteB from './ComponenteB.tsx';
export default function InfoContainer() {
    const [componenteActivo, setComponenteActivo] = useState('B');

    const renderComponente = () => {
        switch (componenteActivo) {
            case 'A':
                return <Info />;
            case 'B':
                return <ComponenteB />;
            default:
                return null;
        }
    };
    return (
        <div>
            <nav>
                <button onClick={() => setComponenteActivo('A')}>Componente A</button>
                <button onClick={() => setComponenteActivo('B')}>Componente B</button>
            </nav>
            <div>{renderComponente()}</div>
        </div>

    )
}