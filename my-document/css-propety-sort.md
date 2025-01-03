# Stylelint導入ガイド - プロパティの自動ソート

このガイドでは、プロパティの順序を自動でソートするためのStylelintの導入手順を説明します。これにより、チーム内のコードスタイルが統一され、メンテナンスが簡単になります。

## 1. Stylelintのインストール

まず、プロジェクトに`stylelint`と必要な設定パッケージをインストールします。

```bash
npm install --save-dev stylelint stylelint-config-recommended-scss stylelint-config-recess-order
```

## 2. 設定ファイルの作成

プロジェクトのルートに`.stylelintrc.json`ファイルを作成し、以下の内容を記述します。

```json
{
  "extends": [
    "stylelint-config-recommended-scss",
    "stylelint-config-recess-order"
  ]
}
```

## 3. 自動修正を実行する設定

`package.json`に以下のスクリプトを追加し、プロパティを自動でソートする設定にします。

```json
{
  "scripts": {
    "fix-styles": "stylelint '**/*.scss' --fix"
  }
}
```

## 4. コマンドの実行

以下のコマンドで、Sass/SCSSファイルのプロパティが自動でソートされます。

```bash
npm run fix-styles
```