const getdata = async (skip, limit) => {
    const req = await fetch(`https://json-api.uz/api/project/fn37/travels?skip=${skip}&limit=${limit}`)
    if (req.status === 200) {
        const res = await req.json()

        return res.data
    }
    else {
        throw new Error("Xatolik mavjud")
    }

}

export default getdata