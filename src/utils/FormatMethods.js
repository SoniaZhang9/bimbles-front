export default class formatMethods {
    static formatAddress(item) {
        //If value == null, return ''
        function checkValue(value) {
            return value ? value : ''
        }

        if (item.address == null) return ''
        else {
            return (
                checkValue(item.address.street) +
                ' ' +
                checkValue(item.address.number) +
                ' ' +
                checkValue(item.address.flat) +
                ' ' +
                checkValue(item.address.postalCode) +
                ' ' +
                checkValue(item.address.city) +
                ' ' +
                checkValue(item.address.province)
            )
        }
    }

    static divideItemsByType(items) {
        const restaurants = items.filter((item) => item.type === 'Restaurant')
        const places = items.filter((item) => item.type === 'Place')
        const businesses = items.filter((item) => item.type === 'Business')
        const products = items.filter((item) => item.type === 'Product')
        return {
            businesses: businesses,
            products: products,
            restaurants: restaurants,
            places: places,
        }
    }
}
