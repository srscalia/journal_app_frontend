const initialState = {
  user: {
    "id": 1,
    "first_name": "Percy",
    "last_name": "Reilly",
    "username": "YWP",
    "password_digest": "dolorem",
    "email": "jeromylittle@wintheiser.io",
    "phone": "1-285-557-1587",
    "journals": [
      {
        "id": 19,
        "user_id": 1,
        "theme": "professional goals",
        "entries": [
          {
            "id": 8,
            "journal_id": 19,
            "title": "The Heart Is a Lonely Hunter",
            "body": "[\"Blanditiis laborum adipisci. Exercitationem quia et. Corporis rem numquam.\", \"Perferendis eius in. Et aut perferendis. Illum error voluptatem.\"]",
            "photo": "https://www.stockvault.net/data/2007/03/01/102413/thumb16.jpg",
            "created_at": "2018-12-11T13:25:42.916Z",
            "updated_at": "2018-12-11T13:25:42.916Z"
          },
          {
            "id": 76,
            "journal_id": 19,
            "title": "The Moon by Night",
            "body": "[\"Odit maiores voluptatum. Nulla veniam nihil. Totam voluptatem voluptate.\", \"Rerum eaque neque. Magnam qui repudiandae. Officia asperiores facere.\"]",
            "photo": "https://www.stockvault.net/data/2008/09/02/106231/thumb16.jpg",
            "created_at": "2018-12-11T13:25:43.067Z",
            "updated_at": "2018-12-11T13:25:43.067Z"
          },
          {
            "id": 133,
            "journal_id": 19,
            "title": "The Last Enemy",
            "body": "[\"Nesciunt culpa nisi. Esse qui repellat. Voluptatum nobis ut.\", \"Possimus distinctio laboriosam. Amet magnam sunt. Id rem quia.\"]",
            "photo": "https://www.stockvault.net/data/2007/03/01/102413/thumb16.jpg",
            "created_at": "2018-12-11T13:25:43.193Z",
            "updated_at": "2018-12-11T13:25:43.193Z"
          },
          {
            "id": 147,
            "journal_id": 19,
            "title": "Alone on a Wide, Wide Sea",
            "body": "[\"Molestias consequatur non. Officia modi distinctio. Dolorum commodi et.\", \"Omnis et iste. Culpa in facilis. Laboriosam aut quia.\"]",
            "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiniMPCpJbfAhWQc98KHZm0CDMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Flandscapes&psig=AOvVaw274eorhIt8iznpAlRxj6Yu&ust=1544566428639497",
            "created_at": "2018-12-11T13:25:43.230Z",
            "updated_at": "2018-12-11T13:25:43.230Z"
          },
          {
            "id": 154,
            "journal_id": 19,
            "title": "The Way of All Flesh",
            "body": "[\"Magni recusandae sunt. Voluptatum veritatis soluta. Molestiae consequuntur et.\", \"Et eum expedita. Aut sint libero. Deserunt iure itaque.\"]",
            "photo": "https://www.stockvault.net/data/2007/03/01/102413/thumb16.jpg",
            "created_at": "2018-12-11T13:25:43.246Z",
            "updated_at": "2018-12-11T13:25:43.246Z"
          },
          {
            "id": 159,
            "journal_id": 19,
            "title": "Alone on a Wide, Wide Sea",
            "body": "[\"Enim quisquam officia. Quo omnis maiores. Quaerat vel eos.\", \"Eligendi sit nobis. Reiciendis nihil cupiditate. Sunt sunt dolores.\"]",
            "photo": "https://www.stockvault.net/data/2008/09/02/106231/thumb16.jpg",
            "created_at": "2018-12-11T13:25:43.259Z",
            "updated_at": "2018-12-11T13:25:43.259Z"
          }
        ]
      },
      {
        "id": 26,
        "user_id": 1,
        "theme": "family",
        "entries": [
          {
            "id": 61,
            "journal_id": 26,
            "title": "Look to Windward",
            "body": "[\"Eum enim provident. Omnis natus quidem. Dolorem ipsum ea.\", \"Vero et et. Beatae est ea. Omnis vel sunt.\"]",
            "photo": "https://www.stockvault.net/data/2007/03/01/102413/thumb16.jpg",
            "created_at": "2018-12-11T13:25:43.034Z",
            "updated_at": "2018-12-11T13:25:43.034Z"
          },
          {
            "id": 101,
            "journal_id": 26,
            "title": "Down to a Sunless Sea",
            "body": "[\"Et eos odit. Voluptatem quisquam saepe. Doloribus non delectus.\", \"Et cumque eos. Blanditiis distinctio hic. Beatae veniam sit.\"]",
            "photo": "https://www.stockvault.net/data/2008/09/02/106231/thumb16.jpg",
            "created_at": "2018-12-11T13:25:43.120Z",
            "updated_at": "2018-12-11T13:25:43.120Z"
          },
          {
            "id": 192,
            "journal_id": 26,
            "title": "Beneath the Bleeding",
            "body": "[\"Alias ut illum. Sed vel facere. Voluptas minus veniam.\", \"Eum exercitationem pariatur. Maxime molestiae et. Id quod maiores.\"]",
            "photo": "https://www.stockvault.net/data/2007/03/01/102413/thumb16.jpg",
            "created_at": "2018-12-11T13:25:43.335Z",
            "updated_at": "2018-12-11T13:25:43.335Z"
          }
        ]
      }
    ]
  },
  selectedJournal: null,
  selectedEntry: null
}

function reducer(state = initialState, action){
  switch (action.type) {
    case "SELECT_JOURNAL":
        return {...state, selectedJournal: action.payload, selectedEntry: null}
    case "SELECT_ENTRY":
      return {...state, selectedEntry: action.payload}
    default:
      return state
  }
}


export default reducer
