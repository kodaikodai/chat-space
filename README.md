<h2 align="center"><a href="http://18.177.99.139/">ChatSpace</a></h2>

[![Image from Gyazo](https://i.gyazo.com/691d3a36aad92121fbdabf3dbd8251ad.gif)](https://gyazo.com/691d3a36aad92121fbdabf3dbd8251ad)

<p align="center">
  <a href="https://www.ruby-lang.org/ja/"><img src="https://user-images.githubusercontent.com/57389471/73752345-276ec180-47a4-11ea-8fe1-caf19e125eeb.png" height="45px;" /></a>
  <a href="https://rubyonrails.org/"><img src="https://user-images.githubusercontent.com/57389471/73752059-9697e600-47a3-11ea-89c1-47465384c4fb.png" height="40px;" /></a>
  <a href="http://haml.info/"><img src="https://user-images.githubusercontent.com/57389471/73752833-fba00b80-47a4-11ea-96d7-54c5e6808403.png" height="55px;" /></a>
  <a href="https://sass-lang.com/"><img src="https://user-images.githubusercontent.com/57389471/73752910-1a060700-47a5-11ea-90e4-0c95d7e3e4ed.png" height="55px;" /></a>
  <a href="https://jquery.com/"><img src="https://user-images.githubusercontent.com/57389471/73754740-38213680-47a8-11ea-8dc7-9a7dfa30c992.png" height="50px;" /></a>
  <a href="https://www.mysql.com/jp/"><img src="https://user-images.githubusercontent.com/57389471/73753087-6e10eb80-47a5-11ea-8a91-47f816398fcb.png" height="60px;" /></a>
  <a href="https://aws.amazon.com/jp/"><img src="https://user-images.githubusercontent.com/57389471/73807685-a568b200-4810-11ea-9b66-121e4ba95ecc.png" height="65px;" /></a>
</p>

## このアプリについて
プログラミングスクールTECH::EXPERTのカリキュラム内の課題にて作成いたしました。

## URL
http://18.177.99.139 <br>
テスト用アカウント（Email:test@test.com Password:tttttttttt）

## 主な機能

### ログイン機能
[![Image from Gyazo](https://i.gyazo.com/f4d336f791eed0d889b510187db93668.png)](https://gyazo.com/f4d336f791eed0d889b510187db93668)

### グループ作成機能
[![Image from Gyazo](https://i.gyazo.com/20c6c895a4b0d4c1f76f73b2c71527a7.png)](https://gyazo.com/20c6c895a4b0d4c1f76f73b2c71527a7)

### グループ編集機能
[![Image from Gyazo](https://i.gyazo.com/accd641e19312cc4af22e5d2623c60ae.png)](https://gyazo.com/accd641e19312cc4af22e5d2623c60ae)

### メッセージ投稿機能
[![Image from Gyazo](https://i.gyazo.com/691d3a36aad92121fbdabf3dbd8251ad.gif)](https://gyazo.com/691d3a36aad92121fbdabf3dbd8251ad)

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :messages
- has_many :groups_users
- has_many  :groups,  through:  :groups_users

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :groups_users
- has_many :messages
- has_many  :users,  through:  :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
