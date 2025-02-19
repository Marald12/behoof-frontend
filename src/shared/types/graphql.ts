import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  _count: ArticleCount;
  banner: Scalars['String']['output'];
  category: Category;
  categoryId: Scalars['String']['output'];
  comments?: Maybe<Array<Comment>>;
  content?: Maybe<Array<ArticleContent>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
  viewsCount: Scalars['Int']['output'];
};

export type ArticleAvgAggregate = {
  __typename?: 'ArticleAvgAggregate';
  viewsCount?: Maybe<Scalars['Float']['output']>;
};

export type ArticleContent = {
  __typename?: 'ArticleContent';
  article: Article;
  articleId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  types: ArticleContentTypes;
};

export type ArticleContentInput = {
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  types: Scalars['String']['input'];
};

export enum ArticleContentTypes {
  List = 'LIST',
  Text = 'TEXT'
}

export type ArticleCount = {
  __typename?: 'ArticleCount';
  comments: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
};

export type ArticleCountAggregate = {
  __typename?: 'ArticleCountAggregate';
  _all: Scalars['Int']['output'];
  banner: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  tags: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  viewsCount: Scalars['Int']['output'];
};

export type ArticleMaxAggregate = {
  __typename?: 'ArticleMaxAggregate';
  banner?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  viewsCount?: Maybe<Scalars['Int']['output']>;
};

export type ArticleMinAggregate = {
  __typename?: 'ArticleMinAggregate';
  banner?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  viewsCount?: Maybe<Scalars['Int']['output']>;
};

export type ArticleSumAggregate = {
  __typename?: 'ArticleSumAggregate';
  viewsCount?: Maybe<Scalars['Int']['output']>;
};

export type AuthDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Brand = {
  __typename?: 'Brand';
  _count: BrandCount;
  category: Category;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  products?: Maybe<Array<Product>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BrandCount = {
  __typename?: 'BrandCount';
  products: Scalars['Int']['output'];
};

export type BrandCountAggregate = {
  __typename?: 'BrandCountAggregate';
  _all: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type BrandDto = {
  categoryId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type BrandMaxAggregate = {
  __typename?: 'BrandMaxAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BrandMinAggregate = {
  __typename?: 'BrandMinAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Category = {
  __typename?: 'Category';
  _count: CategoryCount;
  articles?: Maybe<Array<Article>>;
  banner: Scalars['String']['output'];
  brands?: Maybe<Array<Brand>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  products?: Maybe<Array<Product>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  articles: Scalars['Int']['output'];
  brands: Scalars['Int']['output'];
  products: Scalars['Int']['output'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int']['output'];
  banner: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CategoryDto = {
  title: Scalars['String']['input'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  banner?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  banner?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Color = {
  __typename?: 'Color';
  _count: ColorCount;
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  products?: Maybe<Array<Product>>;
};

export type ColorCount = {
  __typename?: 'ColorCount';
  products: Scalars['Int']['output'];
};

export type ColorCountAggregate = {
  __typename?: 'ColorCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type ColorDto = {
  color: Scalars['String']['input'];
};

export type ColorMaxAggregate = {
  __typename?: 'ColorMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ColorMinAggregate = {
  __typename?: 'ColorMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  article: Article;
  articleId: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int']['output'];
  articleId: Scalars['Int']['output'];
  comment: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type CommentDto = {
  articleId: Scalars['String']['input'];
  comment: Scalars['String']['input'];
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  articleId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  articleId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CreateArticleDto = {
  banner: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  content: Array<ArticleContentInput>;
  tags: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateProductDto = {
  brandId: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  characteristics: Scalars['JSONObject']['input'];
  colors: Array<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserDto = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProductToFavorite: User;
  changePassword: User;
  createArticle: Article;
  createBrand: Brand;
  createCategory: Category;
  createColor: Color;
  createComment: Comment;
  createProduct: Product;
  createQuestion: Question;
  createReview: Review;
  createTokenAndSendEmail: Token;
  deleteProduct: Product;
  findByEmailAndCreateAndSendEmail: Token;
  login: User;
  logout: Scalars['String']['output'];
  register: User;
  removeProductFromFavorite: User;
  updateProduct: Product;
  updateUser: User;
  uploadFile: UploadedFile;
};


export type MutationAddProductToFavoriteArgs = {
  productId: Scalars['String']['input'];
};


export type MutationChangePasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  body: CreateArticleDto;
};


export type MutationCreateBrandArgs = {
  body: BrandDto;
};


export type MutationCreateCategoryArgs = {
  body: CategoryDto;
};


export type MutationCreateColorArgs = {
  body: ColorDto;
};


export type MutationCreateCommentArgs = {
  body: CommentDto;
};


export type MutationCreateProductArgs = {
  body: CreateProductDto;
};


export type MutationCreateQuestionArgs = {
  dto: QuestionDto;
};


export type MutationCreateReviewArgs = {
  dto: ReviewDto;
};


export type MutationDeleteProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationFindByEmailAndCreateAndSendEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  body: AuthDto;
};


export type MutationRegisterArgs = {
  body: CreateUserDto;
};


export type MutationRemoveProductFromFavoriteArgs = {
  productId: Scalars['String']['input'];
};


export type MutationUpdateProductArgs = {
  body: UpdateProductDto;
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  body: UpdateUserDto;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};

export type Product = {
  __typename?: 'Product';
  _count: ProductCount;
  brand: Brand;
  brandId: Scalars['String']['output'];
  category: Category;
  categoryId: Scalars['String']['output'];
  characteristics: Scalars['JSON']['output'];
  colors?: Maybe<Array<Color>>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  price: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  reviews?: Maybe<Array<Review>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  usersFavorite?: Maybe<Array<User>>;
  viewsCount: Scalars['Int']['output'];
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  viewsCount?: Maybe<Scalars['Float']['output']>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  colors: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
  usersFavorite: Scalars['Int']['output'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  brandId: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  characteristics: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  viewsCount: Scalars['Int']['output'];
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  brandId?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  viewsCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  brandId?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  viewsCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  price?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  viewsCount?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  filterProducts: Array<Product>;
  findAllArticles: Array<Article>;
  findAllBrands: Array<Brand>;
  findAllCategories: Array<Category>;
  findAllColors: Array<Color>;
  findAllProducts: Array<Product>;
  findAllQuestions: Array<Question>;
  findAllReviews: Array<Review>;
  findArticleById: Article;
  findBrandById: Brand;
  findByIdCategory: Category;
  findColorById: Color;
  findPopularProducts: Array<Product>;
  findProductById: Product;
  findQuestionById: Question;
  findReviewById: Review;
  getCategoriesForMenu: Array<Category>;
  getProfile: User;
  searchProducts: Array<Product>;
};


export type QueryFilterProductsArgs = {
  battery?: InputMaybe<Scalars['Float']['input']>;
  brands?: InputMaybe<Array<Scalars['String']['input']>>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  memory?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  screen?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryFindAllArticlesArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryFindArticleByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindBrandByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindByIdCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindColorByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindProductByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindQuestionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindReviewByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySearchProductsArgs = {
  search: Scalars['String']['input'];
};

export type Question = {
  __typename?: 'Question';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type QuestionCountAggregate = {
  __typename?: 'QuestionCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  question: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type QuestionDto = {
  question: Scalars['String']['input'];
};

export type QuestionMaxAggregate = {
  __typename?: 'QuestionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type QuestionMinAggregate = {
  __typename?: 'QuestionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Review = {
  __typename?: 'Review';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  starsCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ReviewAvgAggregate = {
  __typename?: 'ReviewAvgAggregate';
  starsCount?: Maybe<Scalars['Float']['output']>;
};

export type ReviewCountAggregate = {
  __typename?: 'ReviewCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  starsCount: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ReviewDto = {
  message: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  starsCount: Scalars['Float']['input'];
};

export type ReviewMaxAggregate = {
  __typename?: 'ReviewMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  starsCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewMinAggregate = {
  __typename?: 'ReviewMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  starsCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewSumAggregate = {
  __typename?: 'ReviewSumAggregate';
  starsCount?: Maybe<Scalars['Int']['output']>;
};

export type Token = {
  __typename?: 'Token';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  type: TokensType;
  updatedAt: Scalars['DateTime']['output'];
};

export type TokenCountAggregate = {
  __typename?: 'TokenCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type TokenMaxAggregate = {
  __typename?: 'TokenMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TokensType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TokenMinAggregate = {
  __typename?: 'TokenMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TokensType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum TokensType {
  Password = 'PASSWORD',
  Register = 'REGISTER'
}

export type UpdateProductDto = {
  characteristics?: InputMaybe<Scalars['JSONObject']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDto = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UploadedFile = {
  __typename?: 'UploadedFile';
  filename: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  articles?: Maybe<Array<Article>>;
  city: Scalars['String']['output'];
  comments?: Maybe<Array<Comment>>;
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  favoriteProducts?: Maybe<Array<Product>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  questions?: Maybe<Array<Question>>;
  reviews?: Maybe<Array<Review>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  articles: Scalars['Int']['output'];
  comments: Scalars['Int']['output'];
  favoriteProducts: Scalars['Int']['output'];
  questions: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  city: Scalars['Int']['output'];
  country: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, email: string, name: string } };

export type GetCategoriesForMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesForMenuQuery = { __typename?: 'Query', getCategoriesForMenu: Array<{ __typename?: 'Category', id: string, title: string, brands?: Array<{ __typename?: 'Brand', id: string, title: string, products?: Array<{ __typename?: 'Product', id: string, title: string }> | null }> | null }> };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: string };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: string, email: string, name: string, city: string, country: string } };

export type UpdateUserMutationVariables = Exact<{
  body: UpdateUserDto;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', name: string, country: string, city: string } };


export const LoginUserDocument = gql`
    mutation loginUser($email: String!, $password: String!) {
  login(body: {email: $email, password: $password}) {
    id
    email
    name
  }
}
    `;
export const GetCategoriesForMenuDocument = gql`
    query getCategoriesForMenu {
  getCategoriesForMenu {
    id
    title
    brands {
      id
      title
      products {
        id
        title
      }
    }
  }
}
    `;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export const GetProfileDocument = gql`
    query getProfile {
  getProfile {
    id
    email
    name
    city
    country
  }
}
    `;
export const UpdateUserDocument = gql`
    mutation updateUser($body: UpdateUserDto!) {
  updateUser(body: $body) {
    name
    country
    city
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    loginUser(variables: LoginUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LoginUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginUserMutation>(LoginUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'loginUser', 'mutation', variables);
    },
    getCategoriesForMenu(variables?: GetCategoriesForMenuQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCategoriesForMenuQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesForMenuQuery>(GetCategoriesForMenuDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoriesForMenu', 'query', variables);
    },
    logout(variables?: LogoutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogoutMutation>(LogoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logout', 'mutation', variables);
    },
    getProfile(variables?: GetProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProfileQuery>(GetProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProfile', 'query', variables);
    },
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;