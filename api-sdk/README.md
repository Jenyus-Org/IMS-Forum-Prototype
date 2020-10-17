# IMSForumPrototype Strapi Client SDK

A documentation for the forum API's Typescript client package.

- [IMSForumPrototype Strapi Client SDK](#imsforumprototype-strapi-client-sdk)
  - [General Usage](#general-usage)
  - [Authenticating with the API](#authenticating-with-the-api)
    - [Registration Object Schema](#registration-object-schema)
    - [Login Object Schema](#login-object-schema)
  - [Working with Models](#working-with-models)
    - [Thing](#thing)
    - [Users](#users)
    - [Submission](#submission)
      - [Creating Comments](#creating-comments)
    - [Posts](#posts)
      - [Creating a Post](#creating-a-post)
      - [Commenting under Posts](#commenting-under-posts)
    - [Comments](#comments)
      - [Creating Comments](#creating-comments-1)

## General Usage

In order to use the client, an instance of it must be created. It is an export default of the library allowing users to do the following:

```js
import IMSForumClient from "api-sdk";

const client = new IMSForumClient();
```

The client takes a `baseUrl` as its only constructor argument, allowing you to define the location of the API server. This is set to `localhost:1337` by default for Strapi development environments.

## Authenticating with the API

The client offers two methods `register()` and `login()` to authenticate and authorize with the Strapi API. It maintains tokens for you and will
automatically provide the `Authentication` HTTP headers wherever possible.

The `register()` and `login()` methods both return a `User` object on success, the currently authenticated user, and provide custom Typescript errors on failure including the failure codes from the API response.

Registering a user:

```js
client
  .register({ username: "TestUser", email: "test@provider.com", password: "test123" })
  .then(console.log) // will log the user
  .catch(console.error);
```

Both methods take objects in order to allow users to pass configuration dictionaries with similar structures.

### Registration Object Schema

```ts
interface IRegisterConfig {
  username: string;
  email: string;
  password: string;
}
```

### Login Object Schema

```ts
interface ILoginConfig {
  identifier: string;
  password: string;
}
```

## Working with Models

The client includes helpers to fetch and modify models with `get()` methods that return arrays of a model or single instances when an ID is passed. Strapi manages IDs with integers, meaning that the `get()` methods all take `id: number` as the optional argument.

### Thing

`Thing` is the base class used by all the models, which aids with managing the protected `client` member and mapping any attributes returned by the API response.

### Users

Users can be fetched with or without being authenticated in the API. This allows user profiles to be visited by unauthenticated clients, as follows:

```js
client.users.get(1).then(console.log);
```

### Submission

`Submission` is an abstract base class designed to be used by posts and tutorials, as it implements common functionality such as mapping comment objects to the `Comment` class, as well as mapping the `author` property to the `User` class. Additionally it implements the `comment()` method to create comments in a submission thread, as seen below.

#### Creating Comments

The `Submission` class implements an abstract method, `comment()`, allowing subclasses to implement the specific method to create comments in a thread. Its usage follows a similar pattern to `Comment.comment()`. It takes a comment-like configuration object and returns a `Promise<Comment>`:

```ts
interface ICommentConfig {
  body: string;
}
```

An example of the usage for posts:

```js
post.comment({
  body: "Test comment.",
}).then(console.log); // will log the new comment
```

**Note:** This method only works when the user has been successfully authenticated to the API.

### Posts

Fetching posts follows the same pattern as for users, posts may be fetched in bulk or single, with or without authentication as well. The `Post` model implements the `Submission` as well as `Thing` interface, so all the expected attributes and methods such as `id` will be present, and comment mapping to `Post.comments` is handled automatically.

#### Creating a Post

The post client helper also allows posts to be created, with the `create()` method, which takes a configuration object as its only argument:

```ts
interface IPostConfig {
  title: string;
  body: string;
}
```

The client will automatically assign the post to the current user and pass any other necessary arguments to the API after calling the method:

```js
client.posts.create({
  title: "Test",
  body: "Test body.",
}).then(console.log);
```

**Note:** This method only works when the user has been successfully authenticated to the API.

#### Commenting under Posts

To create a comment for a post, the `Submission.comment()` method may be used.

### Comments

Fetching comments follows the same pattern as for users, comments may be fetched in bulk or single, with or without authentication as well.

#### Creating Comments

Unlike posts, comments cannot be created with the client helper but instead must use the `Submission.comment()` methods such as the one found in the `Post` class.

To create a comment "under" another comment, the `comment()` method may be used which takes a [comment-like configuration object](#creating-comments) and returns a `Promise<Comment>`:

```js
comment.comment({
  body: "Test comment.",
}).then(console.log); // will log the new comment
```

**Note:** This method only works when the user has been successfully authenticated to the API.
