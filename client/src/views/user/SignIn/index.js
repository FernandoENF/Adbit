import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios'


export default function SignIn() {
    Axios.defaults.withCredentials = true;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const login = () => {
        Axios.post('https://adbit-app.herokuapp.com/api/login', {
            email: email,
            password: password,
        }).then((response) => {
            if(response.data.error){
                alert(response.data.error);
            }
            if (response.data.auth) {
                localStorage.setItem("token", response.data.token)
                history.push('/dashboard')
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
    };
    
    return (
        <main className="main d-flex w-100">
            <div className="container d-flex flex-column">
                <div className="row h-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">
                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-4">
                                        <form onSubmit={(e) => handleSubmit(e)}>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control form-control-lg" type="email" name="email" placeholder="Coloque seu email"
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label>Senha</label>
                                                <input className="form-control form-control-lg" type="password" name="password" placeholder="Coloque sua senha"
                                                    onChange={(e) => setPassword(e.target.value)} />
                                                <small>
                                                    <a href="/resetar-senha">Esqueci minha senha</a>
                                                </small>
                                            </div>
                                            <div>
                                                <div className="custom-control custom-checkbox align-items-center">
                                                    <input type="checkbox" className="custom-control-input" defaultValue="remember-me" name="remember-me" defaultChecked />
                                                    <label className="custom-control-label text-small">Manter conectado</label>
                                                </div>
                                            </div>
                                            <div className="text-center mt-3">
                                                <button className="btn btn-lg btn-primary" onClick={login}>Entrar</button>
                                            </div>
                                            <div className="text-center mt-3">
                                                <a href="/sign-up" className="btn btn-sm btn-primary">Criar conta</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


