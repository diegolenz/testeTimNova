"use client";
import { Veiculo } from "@/models/veiculoModel";
import { deletarVeiculo, listarVeiculos } from "@/services/VeiculoService";
//import { Investimento, Pessoa, InvestimentoTotais } from "@/models/relatorioModel";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { FaFileAlt } from "react-icons/fa";
//import { Props } from "next/script";

//const urlAPI = '';

export default function CrudReport() {
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)

    const carregar = async () => {
        try {
            setLoading(true);
            const response = await listarVeiculos()

            setVeiculos(response);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
                return
            }

            setError("Houve um erro ao buscar os dados da api");

        } finally {
            setLoading(false);
        }
    };

    const deletar = async (id: number) => {
        try {
            setLoading(true);
            await deletarVeiculo(id);

        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
                return
            }

            setError("Houve um erro ao buscar os dados da api");

        } finally {
            setLoading(false);
        }
    };

    const vender = async (id: number) => {
        try {
            setLoading(true);
            await vender(id);

        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
                return
            }

            setError("Houve um erro ao buscar os dados da api");

        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        carregar();
    }, []);


    return (
        <div className="p-4 lg:p-8 space-y-4">

            {loading && <p>Carregando dados...</p>}
            {error && <p>Erro: {error}</p>}

            <div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-gray-100 p-4 rounded-lg shadow-md">

                    <div className="flex items-center space-x-2">
                        <FaFileAlt className="text-[#3CB371] text-2xl" />
                        <h1 className="text-2xl font-bold">Cadastro de veículos</h1>
                    </div>



                    <div className="flex space-x-2">


                        <Link href="/">

                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
                                Fechar
                            </button>
                        </Link>
                        <Link href="/veiculos-cadastro">

                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
                                Cadastrar
                            </button>
                        </Link>

                    </div>
                </div>


                <div id="relatorioContent" className="flex flex-col lg:flex-row gap-4">


                    <div className="w-full lg:w-2/6 bg-gray-100 p-4 rounded-lg shadow-md">

                    </div>


                    <div className="w-full lg:w-4/6 bg-white p-4 rounded-lg shadow-md overflow-auto">

                        <h2 className="text-2xl font-bold text-[#3CB371] mb-4">Veiculos</h2>
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-[#3CB371] text-white text-left">
                                    <th className="p-2">Veiculo</th>
                                    <th className="p-2">Descricao</th>
                                    <th className="p-2">Cor</th>
                                    <th className="p-2">Marca</th>
                                    <th className="p-2">Vendido</th>
                                    <th className="p-2">Ações

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {veiculos.map((v, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="p-2">{veiculos[index].veiculo}</td>
                                        <td className="p-2">{veiculos[index].descricao || 0}</td>
                                        <td className="p-2">{veiculos[index].cor || 0}</td>
                                        <td className="p-2">{veiculos[index].marca || 0}</td>
                                        <td className="p-2">{veiculos[index].vendido || 0}</td>
                                        <td className="p-2">
                                            <Link href="/Veiculos">
                                                <button className="bg-[#3CB371] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition" >
                                                    Editar
                                                </button>
                                            </Link>
                                            <button onClick={() => vender(veiculos[index].id)} className="bg-[#3CB371] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition" >
                                                Vender
                                            </button>
                                            <button onClick={() => deletar(veiculos[index].id)} className="bg-[#3CB371] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition" >
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>



                    </div>
                </div>
            </div>
        </div >
    );
}