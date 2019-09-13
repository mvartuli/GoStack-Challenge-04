import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Vanya Martins Chourizo',
          avatar: '1',
        },
        date: '04 Jun 2019',
        content:
          'Pessoal, estão todos convidados para o evento Saturday Hack Live',
        comments: [
          {
            id: 1,
            author: {
              name: 'Sakura Mochi',
              avatar: '2',
            },
            content: 'Opa! Não vejo a hora!',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Carlos Henrique',
          avatar: '3',
        },
        date: '04 Jun 2019',
        content: 'Alguem sabe onde podemos encontrar temas de Apes para web?',
        comments: [
          {
            id: 1,
            author: {
              name: "Ba'al Zevuv",
              avatar: '4',
            },
            content:
              'Este tipo de conteudo pode ser encontrado nas mais diversas fontes, favor fazer uma pesquisa no Goolge',
          },
        ],
      },
    ],
  };
  render() {
    return (
      <div className="postlist">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
