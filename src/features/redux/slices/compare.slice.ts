import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosMain } from '@/shared/utils/axios-main'
import { findProductByIdSchema } from '@/api/products/schemas/findProductById.schema'
import { RootState } from '@/features/redux/store'
import { toast } from 'react-toastify'

export type ICategory = { __typename?: 'Category', id: string, title: string }

export type IProduct = {
	__typename?: 'Product',
	id: string,
	title: string,
	description: string,
	price: number,
	images?: Array<string> | null,
	characteristics: any,
	rating: number,
	category: ICategory,
	brand: { __typename?: 'Brand', id: string, title: string },
	colors?: Array<{ __typename?: 'Color', id: string, color: string, title: string }> | null,
	reviews?: Array<{
		__typename?: 'Review',
		id: string,
		message: string,
		starsCount: number,
		createdAt: any,
		user: { __typename?: 'User', name: string }
	}> | null
}

interface IInitialState {
	products: IProduct[]
	isLoading: boolean
	isError: boolean
	error?: string
}

const initialState: IInitialState = {
	products: [],
	isLoading: false,
	isError: false
}

export const addProductToCompare = createAsyncThunk<IProduct,
	string,
	{ state: RootState }>('compare/findProduct', async (id, thunkAPI) => {
	const state = thunkAPI.getState() as RootState
	const isAlreadyProduct = state.compare.products.some(product => product.id === id)
	if (isAlreadyProduct) {
		return thunkAPI.rejectWithValue('Продукт уже добавлен в сравнение.')
	}
	try {
		const response = await axiosMain().post('', {
			query: findProductByIdSchema,
			variables: { id }
		})

		const lengthCategory = state.compare.products.filter(
			product => product.category.id === response.data.data.findProductById.id
		).length
		if (lengthCategory >= 4)
			return thunkAPI.rejectWithValue('Вы добавили больше 4 продуктов, одной категории.')

		return response.data.data.findProductById
	} catch (e) {
		return thunkAPI.rejectWithValue('Error fetch product thunk')
	}
})

const compareSlice = createSlice({
	name: 'compare',
	initialState,
	reducers: {
		removeProduct: (state: IInitialState, { payload }) => {
			state.products = state.products.filter((product) => product.id !== payload)
		},
		clearProducts: (state: IInitialState) => {
			state.products = []
		}
	},
	extraReducers: builder => {
		builder
			.addCase(addProductToCompare.pending, (state: IInitialState) => {
				state.isLoading = true
				state.isError = false
				state.error = undefined
			})
			.addCase(addProductToCompare.fulfilled, (state: IInitialState, { payload }) => {
				state.products.push(payload)
				state.isLoading = false
				state.isError = false
				state.error = undefined
				toast.success('Вы успешно добавили продукт в сравнение.')
			})
			.addCase(addProductToCompare.rejected, (state: IInitialState, { payload }) => {
				state.isLoading = false
				state.isError = true
				state.error = String(payload)
				toast.error(state.error)
			})
	}
})

export const { removeProduct, clearProducts } = compareSlice.actions
export default compareSlice.reducer