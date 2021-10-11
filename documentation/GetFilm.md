## Get movie instance

- It will return a movie from an id.

### Definition

| Method | Path                  | Must be authenticated? |
| ------ | --------------------- | ---------------------- |
| GET    | /dev/api/films/{ id } | yes                    |

### Query variables

| Name | Type   | Description |
| ---- | ------ | ----------- |
| id   | string | film id     |

### Result (status 200)

```
{
    "data": {
        "title": "A New Hope",
        "director": "George Lucas",
        "episode_id": 4,
        "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": "1977-05-25"
    }
}
```
