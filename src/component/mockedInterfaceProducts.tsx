export interface Product {
    id: string
    title: string,
    price: number,
    info: string
    image: string
}

export const products: Product[] = [
    {
        id: '0',
        title: 'Vas',
        price: 299,
        info: 'Dekorativ svart vas av stengods. Höjd 32cm. Diameter som störst 18cm, diameter öppningen 11cm.',
        image: 'https://images.unsplash.com/photo-1582469566055-ae79af7370d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },{
        id: '1',
        title: 'Vas',
        price: 349,
        info: 'Vit stilren vas av stengods. Höjd 43cm. Diameter som störst 15cm, diameter öppningen 5cm.',
        image: 'https://images.unsplash.com/photo-1578913685467-e5bd9fe17fb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },{
        id: '2',
        title: 'Kruka',
        price: 249,
        info: 'Trevlig vit kruka av stengods. Höjd 25cm. Diameter 18cm.',
        image: 'https://images.unsplash.com/photo-1578934691229-08987b226b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },{
        id: '3',
        title: 'Vaser',
        price: 249,
        info: 'Två stilrena vaser av naturfärgat trä. Liten vas: Höjd 18cm. Diameter 3cm. Stor vas: Höjd 25cm. Diameter 5cm.',
        image: 'https://images.unsplash.com/photo-1582643381669-4ad3e9cdac73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },{
        id: '4',
        title: 'Vaser',
        price: 249,
        info: 'Två vaser av naturfärgat trä i rundad form. Liten vas: Höjd 15cm. Diameter 4cm. Stor vas: Höjd 22cm. Diameter 4cm.',
        image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },{
        id: '5',
        title: 'Uppläggningsfat',
        price: 349,
        info: 'Två matchande uppläggningsfat av keramik. Litet fat: Diameter 30cm. Kant 2cm. Stort fat: Diameter 45cm. Kant 2cm.',
        image: 'https://images.unsplash.com/photo-1563136838-1e0f8d93e475?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
    },{
        id: '6',
        title: 'Uppläggningsfat',
        price: 249,
        info: 'Ljusgrått minimalistiskt uppläggningsfat av keramik. Diameter 40cm.',
        image: 'https://images.unsplash.com/photo-1609348955124-bfa1086c3304?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },{
        id: '7',
        title: 'Uppläggningsfat',
        price: 149,
        info: 'Uppläggningsfat med dekorativ guldkant av porslin. Diameter 32cm.',
        image: 'https://images.unsplash.com/photo-1605836968319-c213ddfbc2ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },{
        id: '8',
        title: 'Uppläggningsfat',
        price: 179,
        info: 'Uppläggningsfat i uppfriskande blå färg av keramik. Diameter 35cm.',
        image: 'https://images.unsplash.com/photo-1523907002785-3d9527fbc911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=686&q=80',
    },{
        id: '9',
        title: 'Uppläggningsfat',
        price: 149,
        info: 'Uppläggningsfat i jordnära toner av keramik. Diameter 37cm.',
        image: 'https://images.unsplash.com/photo-1498601894320-137c9a97451b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1320&q=80',
    },{
        id: '10',
        title: 'Ljusstake',
        price: 149,
        info: 'Gammeldags ljusstake av mässing. Höjd 15cm. Bottens diameter 13cm.',
        image: 'https://images.unsplash.com/photo-1485364103940-e8aff191ed1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    },{
        id: '11',
        title: 'Ljuslykta',
        price: 199,
        info: 'Mysig ljuslykta i guld av mässing. Höjd 22cm. Diameter som störst 17cm.',
        image: 'https://images.unsplash.com/photo-1497556140430-9ac2d3056f3f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80',
    },{
        id: '12',
        title: 'Ljusstake',
        price: 199,
        info: 'Antik ljusstake i silver. Höjd 30cm. Bottens diameter 18cm.',
        image: 'https://images.unsplash.com/photo-1593102032785-a956eca57454?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    },{
        id: '13',
        title: 'Doftljus',
        price: 79,
        info: '100% stearin med doft av skogen. Höjd 14cm. Diameter 12cm.',
        image: 'https://images.unsplash.com/photo-1599591590264-22dbba64111c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=333&q=80',
    },{
        id: '14',
        title: 'Ljuslykta',
        price: 179,
        info: 'Ljuslykta i rund form av metall och glas. Höjd 14cm. Diameter 12cm.',
        image: 'https://images.unsplash.com/photo-1522448746354-da4936934201?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },{
        id: '15',
        title: 'Bordslampa',
        price: 199,
        info: 'Minimalistisk bordslampa av betong. Höjd 12cm. Bredd 12cm.',
        image: 'https://images.unsplash.com/photo-1583637439358-0f6c9f2dd58b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },{
        id: '16',
        title: 'Taklampa',
        price: 199,
        info: 'Enkel och stilren taklampa av mattsvart metall. Höjd 20cm. Mittens diameter 17cm.',
        image: 'https://images.unsplash.com/photo-1579019154498-df5c364cc469?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },{
        id: '17',
        title: 'Taklampor',
        price: 1499,
        info: 'Ett set med fem kopparfärgade taklampor av metall. Setet består av tre mindre och två större taklampor. Liten: Höjd 22cm. Diameter 20cm. Stor: Höjd 37cm. Diameter 35cm',
        image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },{
        id: '18',
        title: 'Vägglampa',
        price: 199,
        info: 'Orginell vägglampa av guldfärgad metall och mörkgrönn glasskärm. Höjd 45cm. Bottens bredd 17cm',
        image: 'https://images.unsplash.com/photo-1567459045800-4d77c81fc3f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },{
        id: '19',
        title: 'Taklampa',
        price: 349,
        info: 'Minimalistisk matt grå taklampa av stål. Höjd 30cm. Diameter 42cm',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    }
]