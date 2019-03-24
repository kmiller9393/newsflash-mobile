import React from 'react';
import { Query } from 'react-apollo';
import { Text, View } from 'react-native';
import gql from 'graphql-tag';
import StoryCard from '../StoryCard/StoryCard';
import faker from 'faker';

const GET_POSTS = gql` 
    {
      allPosts {
        id
        title
        url
      }
    }
`;

const Posts = () => {
    return (
        <Query
            query={GET_POSTS}
        >
            {({ data, loading }) => {
                if (loading) return <Text>Loading...</Text>;

                return (
                    <View>
                        {data.allPosts.map(post => (
                            <StoryCard {...post} key={post.id} image={faker.image.imageUrl()} />
                        ))}
                    </View>
                );
            }}
        </Query>
    )
}

export default Posts;