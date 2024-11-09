export default async function page({ params }) {
    const slug = (await params).slug
    return <div>My Post: {slug}</div>
}