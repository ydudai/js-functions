
### Git / Github - according to video of 3/12/2024
__________________________________________________

Written with the help of the website: [www.makeareadme.com/](https://www.makeareadme.com/)

#### 1. What is Git and Github - 
see in: [w3schools - Git and GitHub Introduction](https://www.w3schools.com/git/git_intro.asp?remote=github)


#### 2. Git - Install Git on your computer
   a. You can download Git for free from the following website: 
      [https://www.git-scm.com](https://www.git-scm.com)  
   b. install on your computer.  
   c. Check if git is installed.  
- in VSCode in the TERMINAL window or in windows command CMD:  
  **git -v**
        
#### 3. Github -> Create a Github account via your browser in github.com -> signup
   if you already have an account sign in with your email and password.    
   See  your repositories in upper navigation bar (the **Account information** right button). 
   - A repository is the most basic element of GitHub. 
   It's a place where you can store your code, your files, and each file's revision history. 
   Repositories can have multiple collaborators and can be either public or private.
   
#### 4. Github - Create a repository in Github
   - Click on your account information button (in upper navigation bar the right button)
   - Select "Your repositories" menu.
   - Click on <New> button.
   - Type repository name .
   - Fill private or public, description etc.
   - Click on <Create repository> button.
   
#### 5. Git - back to Git   
   - On your computer open the CMD window and type the following commands:  
     **git config --global user.name "ydudai"**.  
     **git config --global user.email "ydudai@outlook.com"**.
     
#### 6. Git - working from VSCode from typing TERMINAL panel or CMD window.
   - open your project folder (my folder is: MyLesson 5 - JS-functions)
   - Open the terminal window from VSCode (View / TERMINAL) 
     or from CMD.  
 - navigate to your project folder, and type:  
      **git init**.  
     **git add README.md**      (Now the file has been added to the Staging Environment.)  
     **git add .**  (All files in folder are added to Staging Environmen.)  
     **git commit -m "First commit"**.  
     **git branch -M main**.  
     **git remote add origin https://github.com/ydudai/js-functions.git**.  
     **git push -u origin main**.
     
#### 7. Git - working from source control panel in VSCode
  - Instead of typing **git add** use the **+ (Stage changes)**.
  - instead of **git commit -m** enter your message in the message control and click **Commit**. 
  - Instead of **git push** click on the **push** button in outgoing section of the control panel.
     
#### 8. Git - the simple guide site for git

#### 9. Git Copy all your Github repository to your computer

**git clone** https://github.com/ydudai/js-functions.git

