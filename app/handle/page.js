export default async function page({ params }) {
    const handle = (await params).handle
    return <div>My Post: {handle}</div>
}