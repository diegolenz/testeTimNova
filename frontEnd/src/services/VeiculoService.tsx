
import { Veiculo } from '@/models/veiculoModel'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8081'

// Buscar todos os veículos
export const listarVeiculos = async (): Promise<Veiculo[]> => {
    const response = await axios.get(`${API_BASE_URL}/veiculos`)
    return response.data
}

// Buscar veículo por ID
export const buscarVeiculoPorId = async (id: number): Promise<Veiculo> => {
    const response = await axios.get(`${API_BASE_URL}/veiculos/${id}`)
    return response.data
}

// Cadastrar novo veículo
export const cadastrarVeiculo = async (veiculo: Veiculo): Promise<Veiculo> => {
    const response = await axios.post(`${API_BASE_URL}/veiculos`, veiculo)
    return response.data
}

// Atualizar veículo
export const atualizarVeiculo = async (id: number, veiculo: Veiculo): Promise<Veiculo> => {
    const response = await axios.put(`${API_BASE_URL}/veiculos/${id}`, veiculo)
    return response.data
}

// Atualizar veículo
export const venderVeiculo = async (id: number): Promise<Veiculo> => {
    const response = await axios.patch(`${API_BASE_URL}/veiculos/${id}`)
    return response.data
}

// Deletar veículo
export const deletarVeiculo = async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/veiculos/${id}`)
}
