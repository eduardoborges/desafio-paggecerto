import React from 'react';
import { NavLink } from 'react-router-dom'

const StepSwitch = (props) => {
    return(
        <ul class="steps is-narrow is-medium is-centered has-content-centered">

            <NavLink to="/cadastro" exact activeClassName="is-active" className="steps-segment">
                <span class="steps-marker">
                    <span class="icon">
                    <i class="fa fa-user"></i>
                    </span>
                </span>
                <div class="steps-content">
                    <p class="heading">Informações iniciais</p>
                </div>
            </NavLink>

            <NavLink to="/cadastro/dados" activeClassName="is-active" className="steps-segment">
                <span class="steps-marker">
                    <span class="icon">
                    <i class="fa fa-user"></i>
                    </span>
                </span>
                <div class="steps-content">
                    <p class="heading">Dados Cadastrais</p>
                </div>
            </NavLink>

            <NavLink to="/cadastro/repasse" activeClassName="is-active" className="steps-segment">
                <span class="steps-marker">
                    <span class="icon">
                    <i class="fa fa-shopping-cart"></i>
                    </span>
                </span>
                <div class="steps-content">
                    <p class="heading">Informações de Repasse</p>
                </div>
            </NavLink>

            <NavLink to="/cadastro/banco" activeClassName="is-active" className="steps-segment">
                <span class="steps-marker">
                    <span class="icon">
                        <i class="fa fa-money-bill-alt"></i>
                    </span>
                </span>
                <div class="steps-content">
                    <p class="heading">Informações Bancárias</p>
                </div>
            </NavLink>

            <NavLink to="/cadastro/termos" activeClassName="is-active" className="steps-segment">
                <span class="steps-marker">
                    <span class="icon">
                        <i class="fa fa-info"></i>
                    </span>
                </span>
                <div class="steps-content">
                    <p class="heading">Termos de Uso</p>
                </div>
            </NavLink>

            <NavLink to="/cadastro/finalizado" activeClassName="is-active" className="steps-segment">
                <span class="steps-marker">
                    <span class="icon">
                        <i class="fa fa-check"></i>
                    </span>
                </span>
                <div class="steps-content">
                    <p class="heading">Confirmação</p>
                </div>
            </NavLink>

    </ul>
    )
}

export default StepSwitch;