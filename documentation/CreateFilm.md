## Create movie instance

- Will register a film in the db.

### Definition

| Method | Path           | Must be authenticated? |
| ------ | -------------- | ---------------------- |
| POST   | /dev/api/films | yes                    |

### Body variables

| Name          | Type   | Request  | Description   |
| ------------- | ------ | -------- | ------------- |
| title         | string | required | title         |
| director      | string | required | director      |
| episode_id    | number | required | episode id    |
| opening_crawl | string | required | opening crawl |
| producer      | string | required | producer      |
| release_date  | date   | required | release date  |

### Payload

```
{
    "title": "A New Hope",
    "director": "George Lucas",
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1977-05-25"
}
```
