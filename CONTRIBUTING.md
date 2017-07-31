# Contributing

## Writing commit messages

We are using [standard-version](https://github.com/conventional-changelog/standard-version) to help with releases and automatic generation of the CHANGELOG. In order for this to work well, you must follow the [Conventional Commits specification](https://conventionalcommits.org/) when writing your commit message.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

When writing commit messages, keep in mind [the seven rules of a great Git commit message](https://chris.beams.io/posts/git-commit/):

- Separate subject from body with a blank line
- Limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with a period
- Use the imperative mood in the subject line, e.g. `Fix`, `Change`, `Update`, `Add`, etc.
- Wrap the body at 72 characters
- Use the body to explain what and why vs. how

For example:

```
fix: Summarize changes in 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here’s the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too
 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```

💡 **Tip:**
> Configure Git [to use your editor](https://help.github.com/articles/associating-text-editors-with-git/) to write commit messages and set ruler marks in your editor to mark `50`, `72` and `100`. For Atom, you can install [omni-ruler](https://atom.io/packages/omni-ruler). Other editors may have this functionality built in.
>
> Atom also has a nice feature that highlights your subject line and body if they're too long.

## Squash and merge vs. create a merge commit

Ideally there is only one feature per pull request, but sometimes this isn’t always the case.

When there is only one feature being merged, always use the "Squash and merge" feature.

If you have multiple features or fixes in a single pull request and each commit uses a structured message, then you should do a standard merge with the "Create a merge commit" feature. This will preserve the commit history from your branch after the merge and allow the CHANGELOG to be created accordingly.

From the [standard-version docs](https://github.com/conventional-changelog/standard-version#should-i-always-squash-commits-when-merging-prs):

> We recommend keeping the scope of each PR to one general feature or fix. In practice, this allows you to use unstructured commit messages when committing each little change and then squash them into a single commit with a structured message (referencing the PR number) once they have been reviewed and accepted.

## Running tests and linting code

A precommit hook is in place to run tests and lint code as soon as you run `git commit`. This ensures that the build will pass once the commit is created. The idea behind the precommit hook is that if there is a failure, you can’t commit your code.

You can perform these tests manually by running the following:

```shell
npm run lint
npm run test
```

If tests fail or linting violations are present, it is advised that you don’t force the commit via `-n` or `--no-verify`. While that will allow you to make your commit, there are a couple of problems with this:

- the next person to pull your code will have to clean up the code and make everything pass
- a new release cannot be made if tests don’t pass or linting returns an error

Backpack uses [Airbnb’s JavaScript Style Guide](https://github.com/airbnb/javascript).

## Other bits

- Always create your feature branch from `master`
- Use the name of your branch to describe the feature, and
- Prefix the name of your feature branch with your initials; this helps identify who the feature belongs to, e.g. `tc-change-button-color`

If you have questions or problems, you can contact one of the core maintainers:

- [jcreamer898](https://github.com/jcreamer898)
- [nickfranciosi](https://github.com/nickfranciosi)
- [thomasthesecond](https://github.com/thomasthesecond)

## Release guide

Releases can be made by:

- [egdelwonk](https://github.com/egdelwonk)
- [jcreamer898](https://github.com/jcreamer898)
- [nickfranciosi](https://github.com/nickfranciosi)
- [thomasthesecond](https://github.com/thomasthesecond)

Please ping one of them to create a new release.
