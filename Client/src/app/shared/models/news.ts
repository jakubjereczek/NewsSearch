export default interface News {
    id: number,
    title: string,
    description: string,
    category: string,
    link: string,
    image_url: string,
    isHidden: boolean, // Wlaściwość wprowadzona do filtorwania
}