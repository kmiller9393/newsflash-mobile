import React, { Component } from 'react';
import {
    Container,
    Button,
    Content,
    Form,
    Header,
    Icon,
    Input,
    Item,
    Right,
    Text
} from 'native-base';
import FlashButton from '../FlashButton/FlashButton';
import { View } from 'react-native';
import styles from './styles';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class NewPost extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            titleError: false,
            url: '',
            urlError: false,
            description: '',
            descriptionError: false,
            tags: '',
            tagsError: false,
            subTags: '',
            subTagsError: false,
            isPublic: true
        }
    }

    handleInputChange = (field, value) => {
        const newState = {
            ...this.state,
            [field]: value
        };
        this.setState(newState);
    };


    handleSubmit = () => {
        const { title, url, description, tags, subTags, isPublic } = this.state;

        if (title.length === 0) {
            return this.setState({ titleError: true });
        }
        this.setState({ titleError: false });

        if (url.length === 0) {
            return this.setState({ urlError: true });
        }
        this.setState({ urlError: false });

        if (description.length === 0) {
            return this.setState({ descriptionError: true });
        }
        this.setState({ descriptionError: false });

        if (tags.length === 0) {
            return this.setState({ tagsError: true });
        }
        this.setState({ tagsError: false });

        if (subTags.length === 0) {
            return this.setState({ subTagsError: true });
        }
        this.setState({ subTagsError: false });
        
        this.props
            .createPost(title, url, tags, subTags, description, isPublic)
            .catch(err => {
                if (/title/i.test(err.message)) {
                    this.setState({ titleError: true });
                }
                if (/url/i.test(err.message)) {
                    this.setState({ urlError: true });
                }
                if (/description/i.test(err.message)) {
                    this.setState({ descriptionError: true });
                }
                if (/tags/i.test(err.message)) {
                    this.setState({ tagsError: true });
                }
                if (/subTags/i.test(err.message)) {
                    this.setState({ subTagsError: true });
                }
            });
    };

    render() {
        const { titleError, urlError, descriptionError, tagsError, subTagsError } = this.state;

        return (
            <Container style={styles.newPostView}>
                <Content contentContainerStyle={styles.newPostContainer}>
                    <Header style={styles.header}>
                        <Right>
                            <Button transparent onPress={() => this.props.handleClose()}>
                                <Icon name="close" style={styles.icon} />
                            </Button>
                        </Right>
                    </Header>
                    <Form style={styles.newPostForm}>
                        <Item error={titleError} style={styles.inputItem}>
                            <Input
                                placeholder="title"
                                onChangeText={value =>
                                    this.handleInputChange('title', value)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                            />
                        </Item>
                        <Item error={urlError} style={styles.inputItem}>
                            <Input
                                placeholder="url"
                                onChangeText={value =>
                                    this.handleInputChange('url', value)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                            />
                        </Item>
                        <Item error={descriptionError} style={styles.inputItem}>
                            <Input
                                placeholder="description"
                                onChangeText={value =>
                                    this.handleInputChange('description', value)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                            />
                        </Item>
                        <Item error={tagsError} style={styles.inputItem}>
                            <Input
                                placeholder="tags"
                                onChangeText={value =>
                                    this.handleInputChange('tags', value)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                            />
                        </Item>
                        <Item error={subTagsError} style={styles.inputItem}>
                            <Input
                                placeholder="subTags"
                                onChangeText={value =>
                                    this.handleInputChange('subTags', value)
                                }
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                            />
                        </Item>
                    </Form>
                    <View style={styles.buttonContainer}>
                        <FlashButton text="Add Post" method={this.handleSubmit} />
                    </View>
                </Content>
            </Container>
        );
    }
}
// .createPost(title, url, tags, subTags, description, isPublic)
export default graphql(
    gql`
      mutation CreatePost($title: String!, $url: String!, $tags: String!, $subtags: String!, $description: String!, $isPublic: Boolean!) {
        createPost(title: $title, url: $url, tags: $tags, subtags: $subtags, description: $description, isPublic: $isPublic) {
            post {
            id
            description
            author {
              user {
            		firstName
              }
            }
          }
        }
      }
    `,
    {
        props: ({ mutate }) => ({
            createPost: (title, url, tags, subtags, description, isPublic) =>
                mutate({ variables: { title, url, tags, subtags, description, isPublic } })
        })
    }
)(NewPost);