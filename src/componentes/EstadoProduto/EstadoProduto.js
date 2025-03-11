import React from 'react';
import './EstadoProduto.css';

const EstadoProduto = ({ estadoProduto, aoAlterarEstadoProduto }) => {
    return (
        <div className="checkbox-container">
            <label>
                <input
                    type="radio"
                    value="Novo"
                    checked={estadoProduto === 'Novo'}
                    onChange={aoAlterarEstadoProduto}
                />
                Novo
            </label>
            <label>
                <input
                    type="radio"
                    value="Usado"
                    checked={estadoProduto === 'Usado'}
                    onChange={aoAlterarEstadoProduto}
                />
                Usado
            </label>
        </div>
    );
};

export default EstadoProduto;