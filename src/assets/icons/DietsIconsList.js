import { GlutenFreeIcon, VeganIcon, VegetarianIcon } from './PreferencesIcons'

export const DietsIconsList = [
    {
        id: 'GLUTEN_FREE',
        label: 'Sin gluten',
        info: 'La dieta sin gluten (DSG) consiste en eliminar de forma estricta de la alimentación todos los productos que contengan o se cocinen con trigo, centeno, cebada y avena, o cualquiera de sus variedades e híbridos (espelta, escanda, kamut, triticale...), y productos derivados',
        icon: GlutenFreeIcon(),
    },
    {
        id: 'VEGETARIAN',
        label: 'Vegetariano',
        info: 'La dieta vegetariana se enfoca a la alimentación con verduras.',
        icon: VegetarianIcon(),
    },
    {
        id: 'VEGAN',
        label: 'Vegano',
        info: 'La dieta vegana consiste en la abstención del uso de productos de origen animal en la alimentación.',
        icon: VeganIcon(),
    },
]
