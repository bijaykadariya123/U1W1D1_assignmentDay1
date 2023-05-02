# PWD 
# cd downloads
# cd Bootcamp
# cd GA\ Class
# cd Unit\ 1
# cd Week1
# cd Deliverable\ Assignment
# mkdir first_homework
# cd first_homework
# touch first_js_homework.js
# touch terminal_homework.bash

/////////////////////////////////////////////////

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
Answer: mkdir galaxy_far_far_away && cd galaxy_far_far_away

# Create a directory called `death_star`

    # and make the following files inside of it:
      # darth_vader.txt
      # princess_leia.txt
      # storm_trooper.txt
Answer: mkdir death_star && cd death_star && touch darth_vader.txt princess_leia.txt storm_trooper.txt
# In `galaxy_far_far_away`, make a directory named `tatooine`
  # and create the following files in it:
    # luke.txt
    # ben_kenobi.txt
Answer: cd .. && mkdir tatooine && cd tatooine && touch luke.txt ben_kenobi.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
    # and in it create:
    # han_solo.txt
    # chewbaca.txt
Answer: mkdir millenium_falcon && cd millenium_falcon && touch han_solo.txt chewbaca.txt

# Rename `ben_kenobi.txt` to `obi_wan.txt
Answer: cd .. && mv ben_kenobi.txt obi_wan.txt

# Copy `storm_trooper.txt` from `death_star` to `tatooine`
cd .. && cd death_star &&cp storm_trooper.txt /Users/bijaykadariya/Desktop/galaxy_far_far_away/tatooine

# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
answer: 
mv luke.txt obi_wan.txt /Users/bijaykadariya/Desktop/galaxy_far_far_away/tatooine/millenium_falcon
# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
Answer:
mv millenium_falcon /Users/bijaykadariya/Desktop/galaxy_far_far_away
# Move `millenium_falcon` into `death_star`
Answer:
mv millenium_falcon /Users/bijaykadariya/Desktop/death_star

# Move `princess_leia.txt` into the `millenium_falcon`
Answer:
 mv princess_leia.txt /Users/bijaykadariya/Desktop/galaxy_far_far_away/millenium_falcon
# Delete `obi_wan.txt`
Answer: 
rm obi_wan.txt 

# In `galaxy_far_far_away`, make a directory called `yavin_4`
Answer: cd .. &&  mkdir yavin_4
# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
mv millenium_falcon /Users/bijaykadariya/Desktop/galaxy_far_far_away/yavin_4

# Make a directory in `yavin_4` called `x_wing`
cd yavin_4 && mkdir x-wing
# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
cd .. && cd millenium_falcon && mv princess_leia.txt /Users/bijaykadariya/Desktop/galaxy_far_far_away/yavin_4 && cd .. && cd death_star && mv luke.txt /Users/bijaykadariya/Desktop/galaxy_far_far_away/yavin_4/x-wing

# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
cd .. && cd yavin_4 && mv millenium_falcon x-wing /Users/bijaykadariya/Desktop/galaxy_far_far_away

# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
cd .. && cd death_star && mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3

# Move `darth_vader.txt` into `tie_fighter_1`
mv darth_vader.txt tie_fighter_1
# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
cp storm_trooper.txt tie_fighter_2 && cp storm_trooper.txt tie_fighter_3
# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
mv tie_fighter_1 tie_fighter_2 tie_fighter_3 /Users/bijaykadariya/Desktop/galaxy_far_far_away 
# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
cd .. && rm -r tie_fighter_3 tie_fighter_2
# Touch a file in "**x_wing**" called "**the_force.txt**".
cd x-wing && touch the_force.txt
# Destroy the "**death_star**" and anyone inside of it.
cd .. && rm -r death_star
# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
mv x-wing yavin_4 && mv millenium_falcon yavin_4