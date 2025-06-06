'use client'
// /pages/veiculos/novo.tsx

import { useRouter } from 'next/navigation'
import { cadastrarVeiculo } from '@/services/VeiculoService'
import { Veiculo } from '@/models/veiculoModel'
import { useForm } from 'react-hook-form'

export default function CadastroVeiculo() {
    const { register, handleSubmit, formState: { errors } } = useForm<Veiculo>()
    const router = useRouter()

    const onSubmit = async (data: Veiculo) => {
        try {
            await cadastrarVeiculo(data)
            alert('Veículo cadastrado com sucesso!')
            router.push('/')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            alert('Erro ao cadastrar veículo')
        }
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
            <h1 className="text-2xl font-bold mb-4">Cadastrar Veículo</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-medium">Veículo</label>
                    <input
                        type="text"
                        {...register('veiculo', { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.veiculo && <p className="text-red-500 text-sm">Campo obrigatório</p>}
                </div>

                <div>
                    <label className="block font-medium">Descrição</label>
                    <textarea
                        {...register('descricao')}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block font-medium">Marca</label>
                    <input
                        type="text"
                        {...register('marca', { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.marca && <p className="text-red-500 text-sm">Campo obrigatório</p>}
                </div>

                <div>
                    <label className="block font-medium">Ano</label>
                    <input
                        type="number"
                        {...register('ano', { required: true, min: 1886 })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.ano && <p className="text-red-500 text-sm">Informe um ano válido</p>}
                </div>

                <div>
                    <label className="block font-medium">Cor</label>
                    <input
                        type="text"
                        {...register('cor')}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block font-medium">Vendido</label>
                    <select
                        {...register('vendido', { required: true })}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Selecione</option>
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>
                    {errors.vendido && <p className="text-red-500 text-sm">Campo obrigatório</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
                >
                    Salvar
                </button>
            </form>
        </div>
    )
}

