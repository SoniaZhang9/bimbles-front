//Import allergens icons
import {
    FishIcon,
    GlutenIcon,
    NutsIcon,
    CrustaceanIcon,
    CeleryIcon,
    EggIcon,
    MustardIcon,
    SesameIcon,
    PeanutsIcon,
    SulfitesIcon,
    SoyIcon,
    LupinsIcon,
    MilkIcon,
    ShellfishIcon,
} from './PreferencesIcons'

export const AllergensIconsList = [
    {
        id: 'GLUTEN',
        label: 'Cereales con gluten',
        info: 'Trigo, espelta, kamut, centeno, cebada y avena.',
        icon: GlutenIcon,
    },
    {
        id: 'NUTS',
        label: 'Frutos de cáscara',
        info: 'Almendras, avellanas, nueces, anacardos, pacanas, panes, postres, helados, galletas, mazapán, salsas, aceites.',
        icon: NutsIcon,
    },
    {
        id: 'CRUSTACEANS',
        label: 'Crustáceos',
        info: 'Cangrejos, langosta, gambas, langostinos, carabineros, cigalas etc. y también salsas, cremas, platos preparados...',
        icon: CrustaceanIcon,
    },
    { id: 'CELERY', label: 'Apio', info: 'Sal, ensaladas, productos cárnicos, sopas, salsas...', icon: CeleryIcon },
    {
        id: 'EGGS',
        label: 'Huevos',
        info: 'Tartas, productos cárnicos, mayonesa, mousses, pastas, quiches, salsas.',
        icon: EggIcon,
    },
    {
        id: 'MUSTARD',
        label: 'Mostaza',
        info: 'Panes, currys, marinados, productos cárnicos, aliños, salsas y sopas.',
        icon: MustardIcon,
    },
    { id: 'FISH', label: 'Pescado', info: 'Pizzas, cubos de sopa, aliños para ensaladas.', icon: FishIcon },
    { id: 'SESAME', label: 'Granos de sésamo', info: 'Pastas, aceites, harinas, panes.', icon: SesameIcon },
    {
        id: 'PEANUTS',
        label: 'Cacahuetes',
        info: 'Mantecas, aceite, harina, galletas, chocolate, currys, postres, salsas...',
        icon: PeanutsIcon,
    },
    {
        id: 'SULPHITES',
        label: 'Sulfitos / Dióxido de azufre',
        info: 'Conservantes en crustáceos, frutas desecadas, productos cárnicos, vegetales, vino y cervezas.',
        icon: SulfitesIcon,
    },
    {
        id: 'SOY',
        label: 'Soja',
        info: 'alsas, pastas, aceites, tofu, postres, pasta de miso, productos cárnicos y productos para vegetarianos.',
        icon: SoyIcon,
    },
    { id: 'LUPIN', label: 'Altramuces', info: 'Pan, pasteles y pastas.', icon: LupinsIcon },
    { id: 'MILK', label: 'Leche', info: 'Mantequilla, queso, nata, yogures... sopas, salsas.', icon: MilkIcon },
    {
        id: 'MOLLUSCS',
        label: 'Moluscos',
        info: ' Mejillones, almejas, caracoles, ostras, bígaros, chirlas, berberechos, cremas, salsas, platos preparados.',
        icon: ShellfishIcon,
    },
]
