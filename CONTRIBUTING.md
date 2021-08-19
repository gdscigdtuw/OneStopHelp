# Contributing Guideline

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Content
- [Getting Started](#getting-started)
- [How to Pull Request](#how-to-pull-request)
- [How to Create Issue](#how-to-create-issue)
- [Checklist](#Checklist)
- [Helpful Resources](#helpful-resources)

### Getting Started
1.  For new user to Git and GitHub, it is advisable that you go through
    [GitHub For Beginners](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/)
    for understanding how Git and GitHub works.
    
2.  Fork the project on GitHub.
    Press the Fork button on right corner to fork the project to your repo.
    ![Illustration for How to Fork a Repository](https://hisham.hm/img/posts/github-fork.png)
    For further information can refer to the link below.
    [Help Guide to Fork a Repository](https://help.github.com/en/articles/fork-a-repo/).

3.  Clone the project.
    ```
    git clone https://github.com/your_user_name/OneStopHelp.git
    ```

    For further information can refer to the link below.
    [Help Guide to Clone a Repository](https://help.github.com/en/articles/cloning-a-repository)

    Navigate to the project directory :file_folder: .

    ```
    cd OneStopHelp
    ```

4. Add a reference(remote) to the original repository to get all the changes from the remote.

    ```
    git remote add upstream https://github.com/dscigdtuw/OneStopHelp.git
    ```

5. Check the remotes for this repository.

    ```
    git remote -v
    ```

6. Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

    ```
    git pull upstream master
    ```

7. Create a new branch.

    ```
    git checkout -b <your_branch_name>
    ```

8. Perfom your desired changes to the code.

9. Track your changes.

    ```
    git add . 
    ```

10. Commit your changes .

    ```
    git commit -m "Relevant message"
    ```

11. Push the committed changes in your feature branch to your remote repo.

    ```
    git push -u origin <your_branch_name>
    ```
    Once you push the changes to your repo, the Compare & pull request button will appear in GitHub.
   ![Illustration for Changes in GitHub](https://archaeogeek.github.io/gettingstartedwithgit/images/github_pullrequest1.png)

### How to Pull Request
1. To create a pull request, click on `compare and pull requests`.

2. Add appropriate title and description to your pull request explaining your changes and efforts done.
   ![Illustration for Changes in GitHub](https://archaeogeek.github.io/gettingstartedwithgit/images/github_pullrequest2.png)

3. Click on `Create Pull Request`.

4. You have made a PR. Wait for your submission to be accepted and your PR to be merged.

5. You can link your PR to the issues.

### How to Create Issue
1. Click on ```Issue``` button under your repository.

2. Click ```New Issue```.

3. You can either use the template provided or just create a blank issue.

4. Write down your issues and submit them.

Please refer to the link below for further information.
[GitHub For Beginners](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue)



