SESH="sliding-puzzle-game_DEV"

tmux has-session -t $SESH 2>/dev/null

if [ $? != 0 ]; then
	tmux new-session -d -s $SESH -n "editor"
	tmux send-keys -t $SESH:editor "cd ~/Projects/sliding-puzzle-game/" C-m
	tmux send-keys -t $SESH:editor "nvim ." C-m

	tmux new-window -t $SESH -n "terminal"
	tmux send-keys -t $SESH:terminal "cd ~/Projects/slidng-puzzle-game/" C-m

	tmux new-window -t $SESH -n "console"
	tmux send-keys -t $SESH:console.1 "cd ~/Projects/sliding-puzzle-game" C-m
	tmux send-keys -t $SESH:console.1 "npm run dev" C-m

fi

tmux attach-session -t $SESH

