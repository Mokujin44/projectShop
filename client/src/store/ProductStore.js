import {makeAutoObservable} from "mobx";


export default class ProductStore {
    constructor() {
        this._types = [
            {id: 1, name: "Стулья"},
            {id: 2, name: "Кровати"}
        ]
        this._brands = [
            {id: 1, name: "Московская древесина"},
            {id: 2, name: "Мир дерева"},
        ]
        this._products = [
           {id: 1, name: "Стул Фортуна", price: 1111, rating: 5, img: ''},
        ]

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setProducts(products) {
        this._products = products
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}