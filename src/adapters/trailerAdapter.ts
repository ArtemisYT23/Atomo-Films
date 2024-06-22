import { Trailer } from "@/types/TrailerInfo"

class TrailerAdapter {
    static adapt(data: any): Trailer {
        return {
            id: data.id,
            key: data.key,
            name: data.name,
            official: data.official,
            size: data.size,
            site: data.site,
            type: data.type
        };
    }
}

export default TrailerAdapter
