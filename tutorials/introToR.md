This page provides an overview of R syntax. Try to code along!

> For beginners: The help tab in the bottom right corner of RStudio is
> your best friend! Use it often

# Basic math

    1 + 2 # addition

    ## [1] 3

    1 - 2 # subtraction

    ## [1] -1

    1 * 2 # multiplication

    ## [1] 2

    1 / 2 # divition

    ## [1] 0.5

    1^2 # exponentiation

    ## [1] 1

    exp(2) # exponentiation (natural)

    ## [1] 7.389056

    log(2) # logarithm (natural)

    ## [1] 0.6931472

    log2(2) # logarithm (base 2)

    ## [1] 1

    log10(2) # logarithm (base 10)

    ## [1] 0.30103

    log(exp(2)) # log() and exp() cancel each other out

    ## [1] 2

    abs(-2) # absolute value

    ## [1] 2

# Rounding

    round(1.1387, digits = 2) # round up

    ## [1] 1.14

    floor(1.1387) # lower integer

    ## [1] 1

    ceiling(1.1387) # higher integer

    ## [1] 2

    signif(1.1387, digits = 2) # significant digits

    ## [1] 1.1

# Logic

    1 > 2 # greater

    ## [1] FALSE

    1 < 2 # less 

    ## [1] TRUE

    1 >= 2 # greater or equal

    ## [1] FALSE

    1 <= 2 # less or equal

    ## [1] TRUE

    1 == 2 # equal

    ## [1] FALSE

    1 != 2 # not equal

    ## [1] TRUE

    TRUE | FALSE # OR

    ## [1] TRUE

    FALSE | FALSE # OR 

    ## [1] FALSE

    TRUE & FALSE # AND

    ## [1] FALSE

    TRUE & TRUE # AND

    ## [1] TRUE

# Assigning and viewing variables

Generally `<-` is used to assign variables and `=` is used to assign
parameters in functions.

    # Assign
    a <- 1
    b <- 2
    c <- a + b

    # View
    a # directly type the variable

    ## [1] 1

    print(a) # print to console, and return invisibly (not great inside functions)

    ## [1] 1

    paste(a) # convert to string, can be used to write to console but not often

    ## [1] "1"

    cat(a) # concatenate and print; no fancy formatting but my preferred approach

    ## 1

# Combining elements

    # Vectors
    x <- c("a", "b", "c", "d")
    x

    ## [1] "a" "b" "c" "d"

    y = c("a", "c", 2, "e")
    y

    ## [1] "a" "c" "2" "e"

    # Lists
    lst <- list(x, y)
    lst

    ## [[1]]
    ## [1] "a" "b" "c" "d"
    ## 
    ## [[2]]
    ## [1] "a" "c" "2" "e"

    namedLst <- list("x" = x, "y" = y)
    namedLst

    ## $x
    ## [1] "a" "b" "c" "d"
    ## 
    ## $y
    ## [1] "a" "c" "2" "e"

    # Dataframes
    df <- data.frame("x" = x, 
                     "y" = y)
    df

    ##   x y
    ## 1 a a
    ## 2 b c
    ## 3 c 2
    ## 4 d e

# Indexing by numbers

    # Vectors and lists
    x[0] # R is 1-based!

    ## character(0)

    x[1]

    ## [1] "a"

    x[-1]

    ## [1] "b" "c" "d"

    x[length(x) - 1]

    ## [1] "c"

    namedLst[1]

    ## $x
    ## [1] "a" "b" "c" "d"

    namedLst[[1]]

    ## [1] "a" "b" "c" "d"

    # Dataframes
    df[1, ]

    ##   x y
    ## 1 a a

    df[1:2, ]

    ##   x y
    ## 1 a a
    ## 2 b c

    df[, 1]

    ## [1] "a" "b" "c" "d"

# Indexing by names

    # String 
    namedLst["x"]

    ## $x
    ## [1] "a" "b" "c" "d"

    namedLst[["x"]]

    ## [1] "a" "b" "c" "d"

    df["x"]

    ##   x
    ## 1 a
    ## 2 b
    ## 3 c
    ## 4 d

    # $
    namedLst$x

    ## [1] "a" "b" "c" "d"

    df$x

    ## [1] "a" "b" "c" "d"

    # Range of numbers ======
    1:10

    ##  [1]  1  2  3  4  5  6  7  8  9 10

    1:length(x)

    ## [1] 1 2 3 4

    seq(1 ,10 , 2)

    ## [1] 1 3 5 7 9

# Random

    set.seed(0)
    runif(5)

    ## [1] 0.8966972 0.2655087 0.3721239 0.5728534 0.9082078

    sample(1:10, 1)

    ## [1] 2

# Is x in y?

    x %in% y # literally "is x in y?"

    ## [1]  TRUE FALSE  TRUE FALSE

    match(x, y) # where is x first in y ? 

    ## [1]  1 NA  2 NA

    match(c("a", "c"), c("a", "a", "b"))

    ## [1]  1 NA

# If else

    num <- 10
    if (num < 10){
      print("lesser")
    } else if (num > 10){
      print("greater")
    } else if (num == 10){
      print('equal')
    }

    ## [1] "equal"

# Functions

    # Simple function
    HelloWorld <- function(arg1, arg2="world"){
      #' This function prints arg1 and arg2 to the console
      #' 
      #' @param arg1 First string
      #' @param arg2 Second string
      #' @return Prints a message to the console
      #' @example
      #' HelloWorld("Hello")
      cat(arg1, arg2)
      return(arg1)
    }
    HelloWorld("Hello")

    ## Hello world

    ## [1] "Hello"

    # Addition
    Add <- function(num1, num2){
      #' This function adds two numbers together
      #'
      #' @param num1 A number
      #' @param num2 A second number
      #' @return Returns the sum of the two numbers
      sum <- num1 + num2
      return(sum)
    }
    Add(1, 2)

    ## [1] 3

# Loops

    # For 
    for (obj in x){
      print(obj)
    }

    ## [1] "a"
    ## [1] "b"
    ## [1] "c"
    ## [1] "d"

    for (idx in 1:length(x)){
      print(idx)
      print(x[idx])
    }

    ## [1] 1
    ## [1] "a"
    ## [1] 2
    ## [1] "b"
    ## [1] 3
    ## [1] "c"
    ## [1] 4
    ## [1] "d"

    # While
    idx <- 1
    while (idx <= length(x)){
      print(idx)
      print(x[idx])
      idx = idx + 1
    }

    ## [1] 1
    ## [1] "a"
    ## [1] 2
    ## [1] "b"
    ## [1] 3
    ## [1] "c"
    ## [1] 4
    ## [1] "d"

# Working directory

    getwd()

    ## [1] "/Users/amandazacharias/Documents/amzacharias.github.io/tutorials"

    #setwd()

# Input/Output

    # Common input functions
    csv <- read.csv("foo.csv")
    table <- read.table("foo.txt", header = TRUE)

    # Common output functions
    write.csv(csv, "practice.csv")
    write.table(table, "practice.txt")

# Install packages

    # Install CRAN
    # install.packages("dplyr")

    # Install Bioconductor
    # if (!require("BiocManager", quietly = TRUE)){
    #   install.packages("BiocManager")
    # }
    # BiocManager::install("dplyr")

    # Load
    library("dplyr") # version 1.1.2
    # Inspect version
    packageVersion("dplyr")

    ## [1] '1.1.2'
