const MUSCLES = [
  "Upper chest",
  "Mid/lower chest",
  "Lats",
  "Mid back",
  "Rear delts",
  "Side delts",
  "Front delts",
  "Triceps",
  "Biceps",
  "Forearms",
  "Neck",
  "Quads",
  "Glutes",
  "Hamstrings",
  "Calves",
  "Adductors",
  "Abs",
  "Obliques",
  "Lower back",
];

const EQUIPMENT = [
  "Bodyweight",
  "Dumbbells",
  "Barbell",
  "Bench",
  "Cable machine",
  "Machines",
  "Pull-up bar",
  "Bands",
  "Leg press",
  "Leg extension",
  "Hamstring curl",
  "Back extension",
  "Adductor machine",
  "Calf raise machine",
];

const GOALS = [
  "Hypertrophy",
  "Strength",
  "Strength + Hypertrophy",
  "Low-hypertrophy strength",
  "Maintenance",
  "Athletic / parkour carryover",
];

const GOAL_DETAILS = {
  "Hypertrophy": "Grow the muscle with controlled volume, stretch, and tension.",
  "Strength": "Improve force with heavier intent, lower reps, and longer rests.",
  "Strength + Hypertrophy": "Blend a heavier main lift with useful accessory volume.",
  "Low-hypertrophy strength": "Build stability and strength with low pump and lower volume.",
  "Maintenance": "Keep the tissue trained without making it a priority.",
  "Athletic / parkour carryover": "Build usable force, control, stiffness, and tendon-friendly capacity.",
};

const PRESETS = {
  "Aesthetic Build": {
    select: ["Upper chest", "Side delts", "Lats", "Triceps", "Biceps", "Mid/lower chest", "Quads", "Glutes", "Abs"],
    goals: {
      "Upper chest": "Strength + Hypertrophy",
      "Side delts": "Hypertrophy",
      Lats: "Hypertrophy",
      Triceps: "Hypertrophy",
      Biceps: "Hypertrophy",
      "Mid/lower chest": "Maintenance",
      Quads: "Maintenance",
      Glutes: "Maintenance",
      Abs: "Maintenance",
    },
    length: "50",
  },
  "Parkour Strength": {
    select: ["Quads", "Glutes", "Hamstrings", "Calves", "Adductors", "Abs", "Obliques", "Lower back"],
    goals: {
      Quads: "Athletic / parkour carryover",
      Glutes: "Athletic / parkour carryover",
      Hamstrings: "Strength",
      Calves: "Athletic / parkour carryover",
      Adductors: "Strength",
      Abs: "Low-hypertrophy strength",
      Obliques: "Low-hypertrophy strength",
      "Lower back": "Strength",
    },
    length: "50",
    profile: { jumpBias: 7, neuralBias: 7, tendonBias: 8, hypertrophyBias: 2, strengthBias: 7, jointCaution: 5 },
  },
  "Low-Hypertrophy Core": {
    select: ["Abs", "Obliques", "Lower back"],
    goals: {
      Abs: "Low-hypertrophy strength",
      Obliques: "Low-hypertrophy strength",
      "Lower back": "Low-hypertrophy strength",
    },
    length: "35",
    profile: { hypertrophyBias: 1, strengthBias: 6, neuralBias: 5, jointCaution: 6, volumeTolerance: 3 },
  },
  "Upper Body Aesthetic": {
    select: ["Upper chest", "Lats", "Side delts", "Rear delts", "Triceps", "Biceps"],
    goals: {
      "Upper chest": "Strength + Hypertrophy",
      Lats: "Hypertrophy",
      "Side delts": "Hypertrophy",
      "Rear delts": "Hypertrophy",
      Triceps: "Hypertrophy",
      Biceps: "Hypertrophy",
    },
    length: "50",
  },
  "Minimal Time": {
    select: ["Upper chest", "Lats", "Quads", "Glutes", "Abs"],
    goals: {
      "Upper chest": "Strength + Hypertrophy",
      Lats: "Strength + Hypertrophy",
      Quads: "Strength",
      Glutes: "Strength",
      Abs: "Low-hypertrophy strength",
    },
    length: "20",
    profile: { density: "dense", volumeTolerance: 2, novelty: "stable" },
  },
};

const PROFILE_SLIDERS = [
  ["hypertrophyBias", "Hypertrophy bias", "More pump-friendly volume, stable tension, and moderate reps."],
  ["strengthBias", "Max strength bias", "More heavy compounds, longer rests, and lower rep targets."],
  ["neuralBias", "Neural / power bias", "More crisp intent, lower fatigue, explosive or high-skill strength."],
  ["jumpBias", "Jump training bias", "More landing, takeoff, stiffness, and plyometric exposure."],
  ["tendonBias", "Tendon capacity", "More controlled stiffness, calf/adductor/isometric-friendly work."],
  ["jointCaution", "Joint caution", "Avoids high-stress choices and heavily stretched loaded positions."],
  ["volumeTolerance", "Volume tolerance", "Higher values allow more sets before the engine trims the workout."],
  ["technicalSkill", "Technical skill", "Higher values allow more complex barbell, unilateral, and plyometric choices."],
];

const defaultProfile = {
  hypertrophyBias: 5,
  strengthBias: 5,
  neuralBias: 4,
  jumpBias: 2,
  tendonBias: 4,
  jointCaution: 4,
  volumeTolerance: 5,
  technicalSkill: 5,
  trainingAge: "intermediate",
  density: "normal",
  novelty: "stable",
  surface: "normal",
  limiter: "none",
  jumpExperience: "some",
};

const JUMP_SLIDERS = [
  ["maxStrength", "Slow strength", "Deep squat/hinge strength and ability to produce force without rushing."],
  ["fastStrength", "Fast strength", "Ability to explode from a countermovement or short dip."],
  ["reactiveStiffness", "Reactive stiffness", "Pogos, quick contacts, ankle stiffness, and bounce off the ground."],
  ["elasticSkill", "Elastic coordination", "How well approach speed turns into jump distance or height."],
  ["singleLegControl", "Single-leg control", "Landing, cutting, bounding, and pelvis/knee control."],
  ["tendonTolerance", "Tendon tolerance", "How well calves, Achilles, knees, and feet tolerate jump volume."],
  ["sprintSkill", "Sprint skill", "Acceleration mechanics, rhythm, and speed exposure."],
  ["landingConfidence", "Landing confidence", "Ability to stick landings quietly without collapsing."],
];

const JUMP_STRENGTH_SLIDERS = [
  ["quadStrength", "Quad strength", "Squat, leg press, split squat, and knee-dominant force."],
  ["hamstringStrength", "Hamstring strength", "Hamstring curls, hinges, sprint resilience, and posterior-chain braking."],
  ["calfStrength", "Calf strength", "Calf raise strength, ankle stiffness, and lower-leg force."],
  ["gluteStrength", "Glute strength", "Hip extension, takeoff drive, bounds, and unilateral hip control."],
  ["adductorStrength", "Adductor strength", "Groin strength, cutting support, pelvic control, and takeoff stability."],
  ["trunkStrength", "Trunk / brace strength", "Bracing, anti-rotation, landing posture, and force transfer."],
];

const JUMP_STRENGTH_LABELS = Object.fromEntries(JUMP_STRENGTH_SLIDERS.map(([key, label]) => [key, label]));

const JUMP_GOALS = [
  ["vertical", "Vertical jump"],
  ["approachVertical", "Approach vertical"],
  ["standingBroad", "Standing broad jump"],
  ["runningLongJump", "Running long jump"],
  ["acceleration", "Acceleration"],
  ["maxVelocity", "Max velocity"],
  ["sprintSpeed", "Sprint speed"],
  ["reactiveStiffness", "Reactive stiffness"],
  ["tendonDurability", "Tendon durability"],
  ["landingSkill", "Landing skill"],
];

const JUMP_EQUIPMENT = [
  "Bodyweight",
  "Dumbbells",
  "Barbell",
  "Bench",
  "Bands",
  "Leg press",
  "Hamstring curl",
  "Back extension",
  "Adductor machine",
  "Calf raise machine",
];

const defaultJumpProfile = {
  goals: ["vertical"],
  equipment: ["Bodyweight", "Dumbbells", "Bench"],
  sessions: "3",
  experience: "some",
  surface: "normal",
  insurance: "medium",
  useStrengthProfile: false,
  maxStrength: 5,
  fastStrength: 5,
  reactiveStiffness: 5,
  elasticSkill: 5,
  singleLegControl: 5,
  tendonTolerance: 5,
  sprintSkill: 5,
  landingConfidence: 5,
  quadStrength: 5,
  hamstringStrength: 5,
  calfStrength: 5,
  gluteStrength: 5,
  adductorStrength: 5,
  trunkStrength: 5,
};

const RECOMP_SLIDERS = [
  ["fatLossPriority", "Fat-loss priority", "Higher values create a clearer deficit and faster scale movement."],
  ["muscleGainPriority", "Muscle-gain priority", "Higher values protect performance, protein, and lifting quality."],
  ["deficitAggression", "Deficit aggression", "Controls how hard the plan pushes calories or portions down."],
  ["hungerTolerance", "Hunger tolerance", "Higher values allow a slightly more aggressive plan."],
  ["mealPrepWillingness", "Meal prep willingness", "Higher values use more planned meals and repeatable defaults."],
  ["proteinConsistency", "Protein consistency", "Higher values assume you can hit protein anchors most days."],
  ["cardioWillingness", "Cardio willingness", "Higher values add more steps, easy cardio, and conditioning."],
  ["weekendConsistency", "Weekend consistency", "Lower values add guardrails for Friday-Sunday drift."],
];

const defaultRecompProfile = {
  unit: "lb",
  bodyweight: "",
  targetWeight: "",
  height: "",
  age: "",
  sex: "unspecified",
  activity: "light",
  timeline: "8",
  tracking: "flexible",
  eatingOut: "1",
  steps: "",
  meals: "3",
  fatLossPriority: 7,
  muscleGainPriority: 6,
  deficitAggression: 5,
  hungerTolerance: 5,
  mealPrepWillingness: 5,
  proteinConsistency: 6,
  cardioWillingness: 5,
  weekendConsistency: 5,
};

const GENERATOR_INJURIES = [
  ["shoulder", "Shoulder"],
  ["elbow", "Elbow"],
  ["knee", "Knee"],
  ["ankle", "Ankle"],
  ["achilles", "Achilles"],
];

const JUMP_INJURIES = [
  ["knee", "Knee"],
  ["achilles", "Achilles"],
];

const defaultGeneratorInjuries = Object.fromEntries(GENERATOR_INJURIES.map(([id]) => [id, { active: false, pain: 0 }]));
const defaultJumpInjuries = Object.fromEntries(JUMP_INJURIES.map(([id]) => [id, { active: false, pain: 0 }]));

const defaultCalisthenicsProfile = {
  enabled: false,
  straightArmPriority: 0,
};

const REGRESSION_MAP = {
  "pull-up": ["band-assisted-pull-up", "pull-up-negative", "lat-pulldown", "scapular-pull-up"],
  "band-assisted-pull-up": ["pull-up-negative", "lat-pulldown", "scapular-pull-up"],
  "lat-pulldown": ["band-assisted-pull-up", "scapular-pull-up"],
  "incline-barbell-press": ["incline-db-press", "feet-elevated-push-up", "incline-db-squeeze-press"],
  "back-squat": ["deep-leg-press", "goblet-squat", "tempo-split-squat"],
  "barbell-romanian-deadlift": ["db-romanian-deadlift", "back-extension", "single-leg-hip-hinge"],
};

const EXERCISES = [
  e("Incline DB Press", ["Upper chest"], ["Triceps", "Front delts"], ["Dumbbells", "Bench"], "upper press", ["Strength + Hypertrophy", "Hypertrophy"], 3, 2, 2, 4, "6-10", "2-3 min", "1-2", "Touch low on the chest and press slightly back.", "A strong upper-chest press that can be loaded without a barbell."),
  e("Incline Barbell Press", ["Upper chest"], ["Triceps", "Front delts"], ["Barbell", "Bench"], "upper press", ["Strength", "Strength + Hypertrophy"], 4, 3, 3, 4, "4-8", "3 min", "1-2", "Keep shoulder blades pinned and pause cleanly.", "Heavy upper-chest strength work with predictable progression."),
  e("Low-to-High Cable Fly", ["Upper chest"], ["Front delts"], ["Cable machine"], "fly", ["Hypertrophy"], 2, 1, 2, 3, "10-15", "75-90 sec", "1-3", "Sweep up and in without shrugging.", "Adds upper-chest tension without needing more pressing fatigue."),
  e("Feet-Elevated Push-Up", ["Upper chest"], ["Triceps", "Front delts", "Abs"], ["Bodyweight"], "upper press", ["Hypertrophy", "Strength + Hypertrophy", "Athletic / parkour carryover"], 2, 1, 2, 3, "8-15", "75-90 sec", "1-3", "Keep the body rigid and press up/back through the floor.", "A no-equipment upper-chest substitute that preserves the pressing role."),
  e("Incline DB Fly", ["Upper chest"], ["Front delts"], ["Dumbbells", "Bench"], "fly", ["Hypertrophy", "Strength + Hypertrophy"], 2, 2, 2, 2, "10-15", "75 sec", "2-3", "Open only as far as the shoulder stays comfortable.", "Upper-chest accessory volume that keeps pressing fatigue lower."),
  e("Incline DB Squeeze Press", ["Upper chest"], ["Triceps", "Front delts"], ["Dumbbells", "Bench"], "upper press", ["Hypertrophy", "Strength + Hypertrophy"], 2, 1, 2, 2, "8-12", "90 sec", "1-3", "Press the dumbbells together while driving up.", "A joint-friendly upper-chest press variation with a clear tension focus."),
  e("Push-Up", ["Mid/lower chest"], ["Triceps", "Front delts", "Abs"], ["Bodyweight"], "horizontal press", ["Hypertrophy", "Maintenance", "Athletic / parkour carryover"], 2, 1, 1, 3, "8-20", "60-90 sec", "1-3", "Own the plank and finish with shoulder blades moving.", "Efficient chest and trunk work with low setup cost."),
  e("Planche Lean", ["Front delts"], ["Upper chest", "Abs", "Biceps"], ["Bodyweight"], "straight arm", ["Strength", "Low-hypertrophy strength", "Athletic / parkour carryover"], 2, 2, 3, 3, "10-25 sec", "90 sec-2 min", "2-4", "Lock elbows, protract hard, and lean only as far as you can hold cleanly.", "Straight-arm front-delt and scapular strength for planche-style carryover."),
  e("Pseudo Planche Push-Up Hold", ["Front delts", "Upper chest"], ["Triceps", "Abs"], ["Bodyweight"], "straight arm", ["Strength + Hypertrophy", "Athletic / parkour carryover"], 3, 2, 4, 3, "8-20 sec", "2 min", "2-4", "Turn elbow pits forward, push the floor away, and keep the lean consistent.", "A harder straight-arm-ish pressing support drill when calisthenics skill matters."),
  e("DB Bench Press", ["Mid/lower chest"], ["Triceps", "Front delts"], ["Dumbbells", "Bench"], "horizontal press", ["Strength + Hypertrophy", "Hypertrophy"], 3, 2, 2, 4, "6-10", "2 min", "1-2", "Let the elbows travel naturally below the torso.", "Good chest loading with more freedom than a straight bar."),
  e("Machine Chest Press", ["Mid/lower chest"], ["Triceps", "Front delts"], ["Machines"], "horizontal press", ["Hypertrophy", "Maintenance"], 2, 1, 2, 2, "8-12", "90 sec", "1-3", "Press through the handles without losing rib position.", "Stable chest volume with lower coordination demand."),
  e("Pull-Up", ["Lats"], ["Biceps", "Mid back"], ["Pull-up bar"], "vertical pull", ["Strength", "Athletic / parkour carryover"], 4, 2, 3, 4, "3-8", "2-3 min", "1-2", "Start each rep by pulling the shoulder blades down.", "High-value lat strength with athletic body control."),
  e("Band-Assisted Pull-Up", ["Lats"], ["Biceps", "Mid back"], ["Pull-up bar", "Bands"], "vertical pull", ["Hypertrophy", "Strength"], 2, 1, 2, 3, "6-10", "2 min", "1-3", "Use just enough band help to keep reps clean.", "Keeps the pull-up pattern trainable when strict reps are limited."),
  e("Pull-Up Negative", ["Lats"], ["Biceps", "Mid back", "Forearms"], ["Pull-up bar"], "vertical pull", ["Strength", "Low-hypertrophy strength"], 2, 1, 2, 3, "2-4 reps", "2 min", "2-4", "Step or jump to the top, then lower for five controlled seconds.", "Builds pull-up strength with lower rep demands and a predictable eccentric target."),
  e("Scapular Pull-Up", ["Lats", "Mid back"], ["Forearms"], ["Pull-up bar"], "vertical pull", ["Low-hypertrophy strength", "Maintenance", "Athletic / parkour carryover"], 1, 1, 1, 2, "5-8 reps", "60-90 sec", "3-4", "Hang long, pull shoulder blades down, and keep elbows straight.", "A very accessible vertical-pull regression for shoulder control and lat initiation."),
  e("Lat Pulldown", ["Lats"], ["Biceps", "Mid back"], ["Cable machine"], "vertical pull", ["Hypertrophy", "Strength + Hypertrophy"], 2, 1, 2, 2, "8-12", "90 sec", "1-3", "Drive elbows to your ribs instead of curling the bar down.", "Reliable lat volume with stable loading."),
  e("Straight-Arm Pulldown", ["Lats"], ["Abs", "Triceps"], ["Cable machine"], "straight arm", ["Hypertrophy", "Strength", "Athletic / parkour carryover"], 1, 1, 2, 2, "8-15", "75-90 sec", "1-3", "Keep elbows long and pull from the armpits without rib flare.", "Lat strength in a straight-arm pattern that carries better to lever work."),
  e("Band Straight-Arm Pulldown", ["Lats"], ["Abs", "Triceps"], ["Bands"], "straight arm", ["Strength", "Maintenance", "Athletic / parkour carryover"], 1, 1, 1, 1, "10-20", "60-75 sec", "2-3", "Lock the ribs down and sweep the arms to the thighs.", "Low-joint-stress straight-arm lat work for calisthenics carryover."),
  e("Tuck Front Lever Hold", ["Lats", "Abs"], ["Rear delts", "Forearms"], ["Pull-up bar"], "straight arm", ["Strength", "Low-hypertrophy strength", "Athletic / parkour carryover"], 3, 2, 4, 4, "6-15 sec", "2 min", "2-4", "Push the bar down, tuck tightly, and keep elbows locked.", "Direct straight-arm lat and trunk work for front-lever strength."),
  e("One-Arm DB Row", ["Lats", "Mid back"], ["Biceps", "Rear delts"], ["Dumbbells", "Bench"], "row", ["Hypertrophy", "Strength + Hypertrophy"], 3, 2, 2, 3, "8-12", "90 sec", "1-2", "Pull the elbow toward the hip and pause.", "Hits lats and mid-back with useful unilateral control."),
  e("DB Pullover", ["Lats"], ["Upper chest", "Triceps"], ["Dumbbells", "Bench"], "vertical pull", ["Hypertrophy", "Maintenance"], 2, 2, 2, 2, "10-15", "75-90 sec", "2-3", "Reach long, keep ribs down, and pull through the armpits.", "A lat-biased substitute when pull-up or cable options are limited."),
  e("Chest-Supported DB Row", ["Mid back"], ["Lats", "Rear delts", "Biceps"], ["Dumbbells", "Bench"], "row", ["Hypertrophy", "Strength + Hypertrophy"], 2, 1, 2, 3, "8-12", "90 sec", "1-3", "Let the shoulder blades reach, then row wide.", "Mid-back volume without taxing the lower back."),
  e("Seated Cable Row", ["Mid back"], ["Lats", "Biceps", "Rear delts"], ["Cable machine"], "row", ["Hypertrophy", "Strength + Hypertrophy"], 2, 1, 2, 2, "8-12", "90 sec", "1-3", "Pause with the sternum tall and elbows back.", "Controlled rowing volume with easy loading changes."),
  e("Band Face Pull", ["Rear delts"], ["Mid back"], ["Bands"], "rear delt", ["Hypertrophy", "Maintenance", "Low-hypertrophy strength"], 1, 1, 1, 1, "12-20", "45-60 sec", "2-3", "Pull to eyebrow height with thumbs behind you.", "Low-stress rear-delt and shoulder-balance work."),
  e("Cable Rear Delt Fly", ["Rear delts"], ["Mid back"], ["Cable machine"], "rear delt", ["Hypertrophy"], 1, 1, 2, 2, "12-20", "60 sec", "1-3", "Move the upper arm out, not the hand back.", "Clean rear-delt tension with little systemic fatigue."),
  e("Prone DB Rear Delt Raise", ["Rear delts"], ["Mid back"], ["Dumbbells", "Bench"], "rear delt", ["Hypertrophy", "Maintenance"], 1, 1, 1, 2, "12-20", "60 sec", "1-3", "Keep the chest supported and reach wide.", "A simple rear-delt option when cables or bands are not available."),
  e("DB Lateral Raise", ["Side delts"], ["Upper traps"], ["Dumbbells"], "lateral raise", ["Hypertrophy", "Maintenance"], 1, 1, 1, 2, "12-20", "60 sec", "1-3", "Lead with the elbow and stop before shrugging.", "Direct side-delt volume for shoulder width."),
  e("Cable Lateral Raise", ["Side delts"], ["Upper traps"], ["Cable machine"], "lateral raise", ["Hypertrophy"], 1, 1, 2, 2, "10-18", "60 sec", "1-3", "Keep cable tension behind the body at the start.", "Constant side-delt tension with a strong stretched position."),
  e("Standing Overhead Press", ["Front delts"], ["Triceps", "Side delts", "Abs"], ["Barbell"], "vertical press", ["Strength", "Strength + Hypertrophy"], 4, 3, 3, 4, "3-6", "3 min", "1-2", "Squeeze glutes and press close to your face.", "Primary shoulder strength with trunk stiffness demand."),
  e("DB Shoulder Press", ["Front delts"], ["Triceps", "Side delts"], ["Dumbbells"], "vertical press", ["Strength + Hypertrophy", "Hypertrophy"], 3, 2, 2, 3, "6-10", "2 min", "1-2", "Press up and slightly in without flaring the ribs.", "Good delt and triceps loading with natural shoulder motion."),
  e("Cable Pushdown", ["Triceps"], [], ["Cable machine"], "elbow extension", ["Hypertrophy", "Maintenance"], 1, 1, 1, 1, "8-15", "60-75 sec", "1-3", "Lock the upper arm still and finish hard.", "Low-joint-stress triceps volume that pairs well after pressing."),
  e("Overhead Cable Triceps Extension", ["Triceps"], [], ["Cable machine"], "elbow extension", ["Hypertrophy"], 2, 2, 2, 2, "10-15", "75 sec", "1-3", "Keep elbows high and let the long head stretch.", "Targets the long head with a strong hypertrophy profile."),
  e("DB Overhead Triceps Extension", ["Triceps"], [], ["Dumbbells"], "elbow extension", ["Hypertrophy", "Maintenance"], 2, 2, 2, 2, "10-15", "75 sec", "1-3", "Let the elbows bend deep without flaring wide.", "Triceps hypertrophy with minimal setup and no cable requirement."),
  e("DB Skull Crusher", ["Triceps"], [], ["Dumbbells", "Bench"], "elbow extension", ["Hypertrophy", "Strength + Hypertrophy"], 2, 2, 2, 3, "8-12", "75-90 sec", "1-3", "Lower slightly behind the head and keep upper arms steady.", "A direct triceps builder that fits dumbbell bench setups."),
  e("Close-Grip Bench Press", ["Triceps"], ["Mid/lower chest", "Front delts"], ["Barbell", "Bench"], "horizontal press", ["Strength", "Strength + Hypertrophy"], 4, 3, 3, 4, "4-8", "2-3 min", "1-2", "Use a shoulder-width grip and keep wrists stacked.", "Heavy triceps strength with compound carryover."),
  e("Diamond Push-Up", ["Triceps"], ["Mid/lower chest", "Front delts", "Abs"], ["Bodyweight"], "horizontal press", ["Strength", "Maintenance", "Athletic / parkour carryover"], 2, 2, 2, 3, "5-12", "75-90 sec", "1-3", "Keep elbows close and move as one plank.", "A no-equipment triceps press that is easy to scale by tempo."),
  e("DB Curl", ["Biceps"], ["Forearms"], ["Dumbbells"], "curl", ["Hypertrophy"], 1, 1, 1, 2, "8-12", "60-75 sec", "1-3", "Supinate hard without swinging the shoulder.", "Simple biceps volume with flexible loading."),
  e("Incline DB Curl", ["Biceps"], ["Forearms"], ["Dumbbells", "Bench"], "curl", ["Hypertrophy"], 2, 2, 2, 3, "10-15", "75 sec", "1-3", "Let the arm hang back and curl without drifting forward.", "Long-head biceps work with a deep stretch."),
  e("Hammer Curl", ["Biceps", "Forearms"], [], ["Dumbbells"], "curl", ["Hypertrophy", "Low-hypertrophy strength"], 1, 1, 1, 2, "8-12", "60-75 sec", "1-3", "Keep thumbs up and elbows quiet.", "Builds elbow flexion and grip-friendly arm strength."),
  e("Farmer Carry", ["Forearms"], ["Abs", "Obliques", "Upper traps"], ["Dumbbells"], "carry", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Strength"], 3, 1, 1, 3, "30-60 sec", "90 sec", "2", "Walk tall and keep ribs stacked over pelvis.", "Grip and trunk strength without pump-focused isolation."),
  e("Plate Pinch Hold", ["Forearms"], [], ["Dumbbells"], "grip", ["Strength", "Low-hypertrophy strength"], 2, 1, 1, 3, "20-45 sec", "60 sec", "2", "Crush evenly through the thumb and fingers.", "Specific grip strength with low visible-size emphasis."),
  e("Neck Isometric Hold", ["Neck"], [], ["Bodyweight"], "neck", ["Low-hypertrophy strength", "Maintenance"], 1, 1, 1, 2, "10-20 sec each", "45 sec", "3", "Push gently into your hand without moving.", "Low-load neck capacity with controlled intensity."),
  e("Band Neck Extension", ["Neck"], [], ["Bands"], "neck", ["Strength", "Maintenance"], 2, 2, 2, 3, "8-12", "60 sec", "2-3", "Move slowly and stop before pinching.", "Progressive neck training when bands are available."),
  e("Back Squat", ["Quads", "Glutes"], ["Lower back", "Adductors"], ["Barbell"], "squat", ["Strength", "Strength + Hypertrophy", "Athletic / parkour carryover"], 5, 4, 4, 5, "3-6", "3 min", "1-2", "Brace before descent and drive the floor apart.", "A primary lower-body force movement when recovery is good."),
  e("Goblet Squat", ["Quads", "Glutes"], ["Abs", "Adductors"], ["Dumbbells"], "squat", ["Hypertrophy", "Athletic / parkour carryover", "Maintenance"], 2, 1, 1, 2, "8-12", "90 sec", "1-3", "Sit between the knees and keep the torso tall.", "Deep ROM leg training with modest joint stress."),
  e("Deep Leg Press", ["Quads", "Glutes"], ["Adductors"], ["Leg press"], "squat", ["Strength", "Hypertrophy", "Athletic / parkour carryover"], 3, 2, 2, 2, "6-12", "2 min", "1-3", "Use as much depth as you can control without pelvis tuck.", "High lower-body output with less skill and spinal loading."),
  e("Bulgarian Split Squat", ["Quads", "Glutes"], ["Adductors"], ["Dumbbells", "Bench"], "single leg", ["Hypertrophy", "Athletic / parkour carryover", "Strength + Hypertrophy"], 4, 3, 3, 4, "6-10 each", "2 min", "1-2", "Stay tall and let the front knee travel.", "Unilateral control and deep strength with major athletic carryover."),
  e("Step-Down", ["Quads"], ["Glutes", "Calves"], ["Bodyweight", "Bench"], "single leg", ["Athletic / parkour carryover", "Low-hypertrophy strength"], 2, 1, 1, 3, "6-10 each", "75-90 sec", "2-3", "Lower slowly and keep the knee tracking over toes.", "Landing-control work with low fatigue."),
  e("Leg Extension", ["Quads"], [], ["Leg extension"], "knee extension", ["Hypertrophy", "Maintenance"], 1, 1, 2, 1, "10-15", "60-75 sec", "1-3", "Squeeze the top without throwing the pad.", "Direct quad work when compounds are limited or volume is needed."),
  e("Hip Thrust", ["Glutes"], ["Hamstrings"], ["Barbell", "Bench"], "hinge", ["Strength", "Hypertrophy"], 3, 2, 2, 3, "6-10", "2 min", "1-2", "Posteriorly tilt at the top and pause.", "Heavy glute work with lower spinal demand than pulls."),
  e("DB Romanian Deadlift", ["Hamstrings", "Glutes"], ["Lower back"], ["Dumbbells"], "hinge", ["Strength + Hypertrophy", "Hypertrophy"], 4, 3, 3, 3, "6-10", "2 min", "1-2", "Push hips back until hamstrings limit the range.", "Posterior-chain strength with accessible equipment."),
  e("Barbell Romanian Deadlift", ["Hamstrings", "Glutes"], ["Lower back"], ["Barbell"], "hinge", ["Strength", "Strength + Hypertrophy"], 5, 4, 4, 5, "4-8", "3 min", "1-2", "Keep the bar close and lats tight.", "Heavy hamstring and hip-hinge strength."),
  e("Hamstring Curl", ["Hamstrings"], [], ["Hamstring curl"], "knee flexion", ["Hypertrophy", "Strength", "Athletic / parkour carryover"], 2, 1, 1, 1, "8-15", "75-90 sec", "1-3", "Curl smoothly and control the return.", "Knee-flexion strength that supports sprinting and knee health."),
  e("Back Extension", ["Lower back", "Glutes"], ["Hamstrings"], ["Back extension"], "hinge", ["Strength", "Low-hypertrophy strength", "Athletic / parkour carryover"], 2, 1, 1, 2, "8-12", "90 sec", "2", "Move from the hips and stop at a straight line.", "Posterior-chain capacity with controlled loading."),
  e("Standing Calf Raise", ["Calves"], [], ["Calf raise machine"], "calf raise", ["Hypertrophy", "Strength", "Athletic / parkour carryover"], 2, 1, 2, 2, "8-15", "75-90 sec", "1-3", "Pause at the stretch, then finish tall.", "Direct calf loading for strength and tendon capacity."),
  e("Pogo Hop", ["Calves"], ["Quads"], ["Bodyweight"], "plyometric", ["Athletic / parkour carryover"], 2, 1, 2, 3, "15-30 sec", "75-90 sec", "3", "Bounce quietly with stiff ankles and soft knees.", "Low-amplitude stiffness work for takeoff and landing."),
  e("Snap Down", ["Calves", "Quads"], ["Abs", "Glutes"], ["Bodyweight"], "landing", ["Athletic / parkour carryover", "Low-hypertrophy strength"], 1, 1, 2, 2, "3-5 reps", "60-75 sec", "4", "Drop into an athletic stance and freeze quietly.", "Low-fatigue landing mechanics for neural control and stiffness."),
  e("Broad Jump", ["Glutes", "Hamstrings", "Quads"], ["Calves", "Abs"], ["Bodyweight"], "jump", ["Athletic / parkour carryover", "Strength"], 3, 2, 3, 4, "2-4 reps", "90 sec-2 min", "4", "Jump for quality, stick the landing, and stop before reps slow.", "Horizontal power and takeoff practice without much hypertrophy volume."),
  e("Skater Bound", ["Glutes", "Adductors"], ["Quads", "Calves", "Obliques"], ["Bodyweight"], "jump", ["Athletic / parkour carryover"], 3, 2, 3, 4, "3-5 each", "75-90 sec", "4", "Push sideways, land quietly, and own the hip position.", "Lateral power and unilateral landing control for athletic carryover."),
  e("Approach Jump", ["Quads", "Glutes", "Calves"], ["Abs"], ["Bodyweight"], "jump", ["Athletic / parkour carryover"], 3, 2, 4, 5, "2-3 reps", "2 min", "4", "Use a smooth approach and stop every set while springy.", "Specific jump practice for takeoff timing and neural output."),
  e("Single-Leg Calf Raise", ["Calves"], [], ["Bodyweight"], "calf raise", ["Strength", "Athletic / parkour carryover", "Maintenance"], 2, 1, 1, 2, "8-15 each", "60-75 sec", "1-3", "Use full range and avoid twisting the ankle.", "Useful calf strength with no machine needed."),
  e("Adductor Machine", ["Adductors"], [], ["Adductor machine"], "adduction", ["Strength", "Hypertrophy", "Athletic / parkour carryover"], 2, 1, 1, 1, "8-15", "75 sec", "1-3", "Control the outer range and squeeze inward.", "Direct adductor capacity for knee and hip control."),
  e("Copenhagen Plank", ["Adductors", "Obliques"], ["Abs"], ["Bench"], "adduction", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Strength"], 3, 2, 2, 4, "10-25 sec each", "60-90 sec", "2-3", "Keep hips tall and ribs tucked.", "Adductor and lateral trunk strength with high carryover."),
  e("Dead Bug", ["Abs"], ["Obliques"], ["Bodyweight"], "anti-extension", ["Low-hypertrophy strength", "Maintenance", "Athletic / parkour carryover"], 1, 1, 1, 1, "6-10 each", "45-60 sec", "3", "Exhale, flatten ribs, and move only as far as you control.", "Bracing practice without high abdominal hypertrophy stimulus."),
  e("Hanging Knee Raise", ["Abs"], ["Lats", "Forearms"], ["Pull-up bar"], "trunk flexion", ["Hypertrophy", "Strength"], 2, 2, 2, 3, "6-12", "75-90 sec", "1-3", "Curl the pelvis up instead of just lifting knees.", "Harder abdominal strength work with grip demand."),
  e("Pallof Press", ["Obliques", "Abs"], [], ["Cable machine"], "anti-rotation", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Maintenance"], 1, 1, 1, 1, "8-12 each", "45-60 sec", "3", "Press straight out and refuse to rotate.", "Anti-rotation strength without high oblique size stimulus."),
  e("Band Pallof Press", ["Obliques", "Abs"], [], ["Bands"], "anti-rotation", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Maintenance"], 1, 1, 1, 1, "8-12 each", "45-60 sec", "3", "Lock ribs down and pause fully extended.", "Portable anti-rotation work for trunk control."),
  e("Side Plank", ["Obliques"], ["Abs", "Glutes"], ["Bodyweight"], "anti-lateral flexion", ["Low-hypertrophy strength", "Maintenance", "Athletic / parkour carryover"], 1, 1, 1, 1, "20-45 sec each", "45-60 sec", "3", "Stack hips and push the floor away.", "Lateral trunk endurance with little hypertrophy bias."),
  e("Suitcase Carry", ["Obliques", "Forearms"], ["Abs"], ["Dumbbells"], "carry", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Strength"], 3, 1, 1, 3, "30-45 sec each", "75-90 sec", "2", "Walk tall without leaning away from the load.", "Anti-lateral-flexion strength with useful real-world carryover."),
];

const STORAGE_KEY = "workoutEngine.v1";

const defaultState = {
  selectedMuscles: [],
  selectedEquipment: ["Bodyweight", "Dumbbells", "Bench"],
  muscleGoals: {},
  readiness: { energy: "medium", soreness: "low", pain: "none", length: "50" },
  generatorInjuries: structuredClone(defaultGeneratorInjuries),
  jumpInjuries: structuredClone(defaultJumpInjuries),
  calisthenics: { ...defaultCalisthenicsProfile },
  profile: { ...defaultProfile },
  jumpProfile: { ...defaultJumpProfile },
  recompProfile: { ...defaultRecompProfile },
  currentJumpBlock: null,
  currentRecompPlan: null,
  savedJumpBlocks: [],
  savedRecompPlans: [],
  favorites: [],
  blocked: [],
  savedRoutines: [],
  logs: [],
  currentWorkout: null,
};

let state = loadState();

function e(name, primary, secondary, equipment, pattern, bestGoals, fatigue, jointStress, difficulty, defaultSets, defaultReps, defaultRest, defaultRir, cue, why) {
  return {
    id: slug(name),
    name,
    primary,
    secondary,
    equipment,
    pattern,
    bestGoals,
    fatigue,
    jointStress,
    difficulty,
    defaultSets,
    defaultReps,
    defaultRest,
    defaultRir,
    cue,
    why,
    substitutions: [],
  };
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function mergeInjuryState(defaults, saved = {}) {
  return Object.fromEntries(Object.keys(defaults).map((key) => {
    const current = saved?.[key] || {};
    return [key, { active: Boolean(current.active), pain: Number(current.pain || 0) }];
  }));
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!parsed || typeof parsed !== "object") return structuredClone(defaultState);
    const next = {
      ...structuredClone(defaultState),
      ...parsed,
      readiness: { ...defaultState.readiness, ...(parsed.readiness || {}) },
      generatorInjuries: mergeInjuryState(defaultGeneratorInjuries, parsed.generatorInjuries),
      jumpInjuries: mergeInjuryState(defaultJumpInjuries, parsed.jumpInjuries),
      calisthenics: { ...defaultState.calisthenics, ...(parsed.calisthenics || {}) },
      profile: { ...defaultState.profile, ...(parsed.profile || {}) },
      jumpProfile: { ...defaultState.jumpProfile, ...(parsed.jumpProfile || {}) },
      recompProfile: { ...defaultState.recompProfile, ...(parsed.recompProfile || {}) },
      muscleGoals: parsed.muscleGoals || {},
    };
    if (!Array.isArray(next.jumpProfile.goals)) next.jumpProfile.goals = parsed.jumpProfile?.goal ? [parsed.jumpProfile.goal] : [...defaultJumpProfile.goals];
    if (!Array.isArray(next.jumpProfile.equipment)) next.jumpProfile.equipment = [...defaultJumpProfile.equipment];
    ["favorites", "blocked", "savedRoutines", "logs", "savedJumpBlocks", "savedRecompPlans"].forEach((key) => {
      if (!Array.isArray(next[key])) next[key] = [];
    });
    return next;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function init() {
  wirePressFeedback();
  wireTabs();
  renderPickers();
  renderPresets();
  hydrateReadiness();
  renderInjuryControls("generator");
  renderInjuryControls("jump");
  hydrateCalisthenics();
  hydrateProfile();
  hydrateJumpProfile();
  hydrateRecompProfile();
  renderJumpPickers();
  renderGoalEditor();
  renderWorkout();
  renderJumpBlock();
  renderRecompPlan();
  renderSavedJumpBlocks();
  renderSavedRecompPlans();
  renderSaved();
  renderLog();
  renderProgress();
  renderPreferences();
  document.getElementById("generateBtn").addEventListener("click", () => {
    state.currentWorkout = generateWorkout();
    saveState();
    renderAll();
    document.getElementById("workoutResult").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("clearSelectionsBtn").addEventListener("click", () => {
    state.selectedMuscles = [];
    state.muscleGoals = {};
    state.currentWorkout = null;
    saveState();
    renderAll();
  });
  document.getElementById("resetDataBtn").addEventListener("click", () => {
    if (!confirm("Reset Workout Engine data in this browser?")) return;
    localStorage.removeItem(STORAGE_KEY);
    state = structuredClone(defaultState);
    renderAll();
  });
  document.getElementById("exerciseSearch").addEventListener("input", renderPreferences);
  document.getElementById("workoutResult").addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const rerollButton = event.target.closest("[data-reroll]");
    if (rerollButton) rerollExercise(rerollButton.dataset.reroll);
    const regressButton = event.target.closest("[data-regress]");
    if (regressButton) regressExercise(regressButton.dataset.regress);
    const resetButton = event.target.closest("[data-reset-exercise]");
    if (resetButton) resetExercise(resetButton.dataset.resetExercise);
  });
  document.getElementById("resetProfileBtn").addEventListener("click", () => {
    state.profile = { ...defaultProfile };
    saveState();
    hydrateProfile();
    renderAll();
  });
  document.getElementById("resetCalisthenicsBtn").addEventListener("click", () => {
    state.calisthenics = { ...defaultCalisthenicsProfile };
    saveState();
    hydrateCalisthenics();
    renderAll();
  });
  document.getElementById("generateJumpBlockBtn").addEventListener("click", () => {
    state.currentJumpBlock = generateJumpBlock();
    saveState();
    renderAll();
    document.getElementById("jumpBlockResult").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("resetJumpProfileBtn").addEventListener("click", () => {
    state.jumpProfile = { ...defaultJumpProfile };
    saveState();
    hydrateJumpProfile();
    renderAll();
  });
  document.getElementById("generateRecompBtn").addEventListener("click", () => {
    state.currentRecompPlan = generateRecompPlan();
    saveState();
    renderAll();
    document.getElementById("recompResult").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("resetRecompBtn").addEventListener("click", () => {
    state.recompProfile = { ...defaultRecompProfile };
    saveState();
    hydrateRecompProfile();
    renderAll();
  });
}

function wirePressFeedback() {
  document.addEventListener("pointerdown", (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest("button");
    if (!button || button.disabled) return;
    button.classList.remove("press-pop");
    button.classList.add("is-pressing");
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
    document.addEventListener(eventName, (event) => {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest("button");
      if (!button) return;
      button.classList.remove("is-pressing");
      button.classList.add("press-pop");
      window.setTimeout(() => button.classList.remove("press-pop"), 220);
    });
  });
}

function wireTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
      if (tab.dataset.tab === "progress") renderProgress();
      if (tab.dataset.tab === "jump") renderSavedJumpBlocks();
      if (tab.dataset.tab === "recomp") renderSavedRecompPlans();
    });
  });
}

function renderPickers() {
  const musclePicker = document.getElementById("musclePicker");
  musclePicker.innerHTML = MUSCLES.map((muscle) => buttonChip(muscle, state.selectedMuscles.includes(muscle), "muscle")).join("");
  musclePicker.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => toggleMuscle(button.dataset.value));
  });

  const equipmentPicker = document.getElementById("equipmentPicker");
  equipmentPicker.innerHTML = EQUIPMENT.map((item) => buttonChip(item, state.selectedEquipment.includes(item), "equipment")).join("");
  equipmentPicker.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => toggleEquipment(button.dataset.value));
  });
}

function buttonChip(label, active, type) {
  return `<button class="chip ${active ? "active" : ""}" data-type="${type}" data-value="${escapeAttr(label)}">${label}</button>`;
}

function toggleMuscle(muscle) {
  if (state.selectedMuscles.includes(muscle)) {
    state.selectedMuscles = state.selectedMuscles.filter((item) => item !== muscle);
    delete state.muscleGoals[muscle];
  } else {
    state.selectedMuscles.push(muscle);
    state.muscleGoals[muscle] = state.muscleGoals[muscle] || "Hypertrophy";
  }
  saveState();
  renderAll();
}

function toggleEquipment(item) {
  state.selectedEquipment = state.selectedEquipment.includes(item)
    ? state.selectedEquipment.filter((existing) => existing !== item)
    : [...state.selectedEquipment, item];
  saveState();
  renderAll();
}

function renderPresets() {
  const row = document.getElementById("presetRow");
  row.innerHTML = Object.keys(PRESETS)
    .map((name) => `<button class="preset" data-preset="${escapeAttr(name)}">${name}</button>`)
    .join("");
  row.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => applyPreset(button.dataset.preset));
  });
}

function applyPreset(name) {
  const preset = PRESETS[name];
  state.selectedMuscles = [...preset.select];
  state.muscleGoals = { ...preset.goals };
  state.readiness.length = preset.length;
  state.profile = { ...state.profile, ...(preset.profile || {}) };
  hydrateReadiness();
  renderInjuryControls("generator");
  renderInjuryControls("jump");
  hydrateCalisthenics();
  hydrateProfile();
  saveState();
  renderAll();
}

function hydrateReadiness() {
  const fields = [
    ["energyInput", "energy"],
    ["sorenessInput", "soreness"],
    ["painInput", "pain"],
    ["lengthInput", "length"],
  ];
  fields.forEach(([id, key]) => {
    const input = document.getElementById(id);
    input.value = state.readiness[key];
    input.onchange = () => {
      state.readiness[key] = input.value;
      saveState();
    };
  });
}

function renderInjuryControls(scope) {
  const options = scope === "jump" ? JUMP_INJURIES : GENERATOR_INJURIES;
  const stateKey = scope === "jump" ? "jumpInjuries" : "generatorInjuries";
  const picker = document.getElementById(`${scope}InjuryPicker`);
  const painWrap = document.getElementById(`${scope}InjuryPain`);
  if (!picker || !painWrap) return;

  const anyActive = options.some(([id]) => state[stateKey][id]?.active);
  picker.innerHTML = [
    `<button class="chip ${anyActive ? "" : "active"}" data-injury-none="${scope}">No injuries</button>`,
    ...options.map(([id, label]) => `<button class="chip ${state[stateKey][id]?.active ? "active" : ""}" data-injury-scope="${scope}" data-injury-id="${id}">${label}</button>`),
  ].join("");
  picker.querySelectorAll("[data-injury-none]").forEach((button) => {
    button.addEventListener("click", () => {
      options.forEach(([id]) => {
        state[stateKey][id] = { active: false, pain: 0 };
      });
      saveState();
      renderInjuryControls(scope);
    });
  });
  picker.querySelectorAll("[data-injury-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.injuryId;
      const current = state[stateKey][id] || { active: false, pain: 0 };
      state[stateKey][id] = { active: !current.active, pain: current.active ? 0 : Math.max(2, Number(current.pain || 0)) };
      saveState();
      renderInjuryControls(scope);
    });
  });

  const active = options.filter(([id]) => state[stateKey][id]?.active);
  painWrap.innerHTML = active.length ? active.map(([id, label]) => `
    <label>
      ${label} working pain: <span>${state[stateKey][id].pain}/10</span>
      <input type="range" min="0" max="10" step="1" value="${state[stateKey][id].pain}" data-injury-pain-scope="${scope}" data-injury-pain-id="${id}" />
    </label>
  `).join("") : `<p class="empty-state">No injury adaptations active.</p>`;
  painWrap.querySelectorAll("[data-injury-pain-id]").forEach((input) => {
    input.addEventListener("input", () => {
      state[stateKey][input.dataset.injuryPainId].pain = Number(input.value);
      saveState();
      renderInjuryControls(scope);
    });
  });
}

function hydrateCalisthenics() {
  const toggle = document.getElementById("calisthenicsToggle");
  const sliders = document.getElementById("calisthenicsSliders");
  if (!toggle || !sliders) return;
  toggle.innerHTML = `
    <button class="chip ${state.calisthenics.enabled ? "" : "active"}" data-calisthenics-enabled="false">Not a priority</button>
    <button class="chip ${state.calisthenics.enabled ? "active" : ""}" data-calisthenics-enabled="true">Care about calisthenics</button>
  `;
  toggle.querySelectorAll("[data-calisthenics-enabled]").forEach((button) => {
    button.addEventListener("click", () => {
      const enabled = button.dataset.calisthenicsEnabled === "true";
      state.calisthenics.enabled = enabled;
      if (enabled && state.calisthenics.straightArmPriority < 5) state.calisthenics.straightArmPriority = 7;
      if (!enabled) state.calisthenics.straightArmPriority = 0;
      saveState();
      hydrateCalisthenics();
    });
  });
  sliders.innerHTML = state.calisthenics.enabled ? `
    <label class="slider-control">
      <span class="slider-label">Straight-arm strength priority<output id="straightArmPriorityOutput">${state.calisthenics.straightArmPriority}</output></span>
      <input type="range" min="0" max="10" step="1" value="${state.calisthenics.straightArmPriority}" id="straightArmPriorityInput" />
      <small>Higher values bias front delts, lats, chest, and trunk toward planche/front-lever/scapular straight-arm choices.</small>
    </label>
  ` : `<p class="empty-state">Calisthenics skill bias is off.</p>`;
  document.getElementById("straightArmPriorityInput")?.addEventListener("input", (event) => {
    state.calisthenics.straightArmPriority = Number(event.target.value);
    document.getElementById("straightArmPriorityOutput").textContent = event.target.value;
    saveState();
  });
}

function hydrateProfile() {
  const sliderWrap = document.getElementById("profileSliders");
  sliderWrap.innerHTML = PROFILE_SLIDERS.map(([key, label, help]) => `
    <label class="slider-control">
      <span class="slider-label">${label}<output id="${key}Output">${state.profile[key]}</output></span>
      <input type="range" min="0" max="10" step="1" value="${state.profile[key]}" data-profile-slider="${key}" />
      <small>${help}</small>
    </label>
  `).join("");
  sliderWrap.querySelectorAll("[data-profile-slider]").forEach((input) => {
    input.addEventListener("input", () => {
      state.profile[input.dataset.profileSlider] = Number(input.value);
      document.getElementById(`${input.dataset.profileSlider}Output`).textContent = input.value;
      saveState();
    });
  });
  const fields = [
    ["trainingAgeInput", "trainingAge"],
    ["densityInput", "density"],
    ["noveltyInput", "novelty"],
    ["surfaceInput", "surface"],
    ["limiterInput", "limiter"],
    ["jumpExperienceInput", "jumpExperience"],
  ];
  fields.forEach(([id, key]) => {
    const input = document.getElementById(id);
    input.value = state.profile[key];
    input.onchange = () => {
      state.profile[key] = input.value;
      saveState();
    };
  });
}

function hydrateJumpProfile() {
  const sliderWrap = document.getElementById("jumpSliders");
  sliderWrap.innerHTML = JUMP_SLIDERS.map(([key, label, help]) => `
    <label class="slider-control">
      <span class="slider-label">${label}<output id="${key}JumpOutput">${state.jumpProfile[key]}</output></span>
      <input type="range" min="0" max="10" step="1" value="${state.jumpProfile[key]}" data-jump-slider="${key}" />
      <small>${help}</small>
    </label>
  `).join("");
  sliderWrap.querySelectorAll("[data-jump-slider]").forEach((input) => {
    input.addEventListener("input", () => {
      state.jumpProfile[input.dataset.jumpSlider] = Number(input.value);
      document.getElementById(`${input.dataset.jumpSlider}JumpOutput`).textContent = input.value;
      saveState();
    });
  });
  const fields = [
    ["jumpSessionsInput", "sessions"],
    ["jumpBlockExperienceInput", "experience"],
    ["jumpBlockSurfaceInput", "surface"],
    ["jumpInsuranceInput", "insurance"],
  ];
  fields.forEach(([id, key]) => {
    const input = document.getElementById(id);
    input.value = state.jumpProfile[key];
    input.onchange = () => {
      state.jumpProfile[key] = input.value;
      saveState();
    };
  });
  hydrateJumpStrengthProfile();
}

function hydrateJumpStrengthProfile() {
  const toggleWrap = document.getElementById("jumpStrengthToggle");
  const sliderWrap = document.getElementById("jumpStrengthSliders");
  if (!toggleWrap || !sliderWrap) return;
  toggleWrap.innerHTML = [
    `<button class="chip ${!state.jumpProfile.useStrengthProfile ? "active" : ""}" data-jump-strength-mode="off">Skip strength sliders</button>`,
    `<button class="chip ${state.jumpProfile.useStrengthProfile ? "active" : ""}" data-jump-strength-mode="on">Use strength profile</button>`,
  ].join("");
  toggleWrap.querySelectorAll("[data-jump-strength-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.jumpProfile.useStrengthProfile = button.dataset.jumpStrengthMode === "on";
      saveState();
      hydrateJumpStrengthProfile();
    });
  });

  if (!state.jumpProfile.useStrengthProfile) {
    sliderWrap.innerHTML = `<div class="empty-state">Skipped. The jump block will use the main weakness finder, goals, injuries, and insurance level.</div>`;
    return;
  }

  sliderWrap.innerHTML = JUMP_STRENGTH_SLIDERS.map(([key, label, help]) => `
    <label class="slider-control">
      <span class="slider-label">${label}<output id="${key}StrengthOutput">${state.jumpProfile[key]}</output></span>
      <input type="range" min="0" max="10" step="1" value="${state.jumpProfile[key]}" data-jump-strength-slider="${key}" />
      <small>${help}</small>
    </label>
  `).join("");
  sliderWrap.querySelectorAll("[data-jump-strength-slider]").forEach((input) => {
    input.addEventListener("input", () => {
      state.jumpProfile[input.dataset.jumpStrengthSlider] = Number(input.value);
      document.getElementById(`${input.dataset.jumpStrengthSlider}StrengthOutput`).textContent = input.value;
      saveState();
    });
  });
}

function hydrateRecompProfile() {
  const sliderWrap = document.getElementById("recompSliders");
  sliderWrap.innerHTML = RECOMP_SLIDERS.map(([key, label, help]) => `
    <label class="slider-control">
      <span class="slider-label">${label}<output id="${key}RecompOutput">${state.recompProfile[key]}</output></span>
      <input type="range" min="0" max="10" step="1" value="${state.recompProfile[key]}" data-recomp-slider="${key}" />
      <small>${help}</small>
    </label>
  `).join("");
  sliderWrap.querySelectorAll("[data-recomp-slider]").forEach((input) => {
    input.addEventListener("input", () => {
      state.recompProfile[input.dataset.recompSlider] = Number(input.value);
      document.getElementById(`${input.dataset.recompSlider}RecompOutput`).textContent = input.value;
      saveState();
    });
  });
  const fields = [
    ["recompUnitInput", "unit"],
    ["bodyweightInput", "bodyweight"],
    ["targetWeightInput", "targetWeight"],
    ["timelineInput", "timeline"],
    ["heightInput", "height"],
    ["ageInput", "age"],
    ["sexInput", "sex"],
    ["activityInput", "activity"],
    ["trackingInput", "tracking"],
    ["eatingOutInput", "eatingOut"],
    ["stepsInput", "steps"],
    ["mealsInput", "meals"],
  ];
  fields.forEach(([id, key]) => {
    const input = document.getElementById(id);
    input.value = state.recompProfile[key];
    input.onchange = () => {
      state.recompProfile[key] = input.value;
      saveState();
    };
  });
}

function renderJumpPickers() {
  const goalPicker = document.getElementById("jumpGoalPicker");
  goalPicker.innerHTML = JUMP_GOALS.map(([id, label]) => buttonChip(label, state.jumpProfile.goals.includes(id), "jump-goal").replace(`data-value="${escapeAttr(label)}"`, `data-value="${id}"`)).join("");
  goalPicker.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => toggleJumpGoal(button.dataset.value));
  });

  const equipmentPicker = document.getElementById("jumpEquipmentPicker");
  equipmentPicker.innerHTML = JUMP_EQUIPMENT.map((item) => buttonChip(item, state.jumpProfile.equipment.includes(item), "jump-equipment")).join("");
  equipmentPicker.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => toggleJumpEquipment(button.dataset.value));
  });
}

function toggleJumpGoal(goal) {
  state.jumpProfile.goals = state.jumpProfile.goals.includes(goal)
    ? state.jumpProfile.goals.filter((item) => item !== goal)
    : [...state.jumpProfile.goals, goal];
  if (!state.jumpProfile.goals.length) state.jumpProfile.goals = ["vertical"];
  saveState();
  renderJumpPickers();
}

function toggleJumpEquipment(item) {
  state.jumpProfile.equipment = state.jumpProfile.equipment.includes(item)
    ? state.jumpProfile.equipment.filter((existing) => existing !== item)
    : [...state.jumpProfile.equipment, item];
  if (!state.jumpProfile.equipment.length) state.jumpProfile.equipment = ["Bodyweight"];
  saveState();
  renderJumpPickers();
}

function renderGoalEditor() {
  const editor = document.getElementById("goalEditor");
  if (!state.selectedMuscles.length) {
    editor.className = "goal-editor empty-state";
    editor.textContent = "Select muscles to assign goals.";
    return;
  }
  editor.className = "goal-editor";
  editor.innerHTML = state.selectedMuscles
    .map((muscle) => {
      const current = state.muscleGoals[muscle] || "Hypertrophy";
      return `
        <div class="goal-row">
          <div>
            <div class="goal-name">${muscle}</div>
            <small class="muted">${GOAL_DETAILS[current]}</small>
          </div>
          <select data-muscle="${escapeAttr(muscle)}">
            ${GOALS.map((goal) => `<option value="${escapeAttr(goal)}" ${goal === current ? "selected" : ""}>${goal}</option>`).join("")}
          </select>
        </div>
      `;
    })
    .join("");
  editor.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      state.muscleGoals[select.dataset.muscle] = select.value;
      saveState();
      renderGoalEditor();
    });
  });
}

function generateWorkout() {
  const selected = state.selectedMuscles;
  if (!selected.length || !state.selectedEquipment.length) {
    return {
      title: "Incomplete setup",
      explanation: "Select at least one muscle and one equipment option.",
      exercises: [],
      notes: [],
      estimatedDuration: 0,
    };
  }

  const length = Number(state.readiness.length);
  const volumeShift = state.profile.volumeTolerance >= 8 ? 1 : state.profile.volumeTolerance <= 2 ? -1 : 0;
  const maxExercises = Math.max(3, (length <= 20 ? 4 : length <= 35 ? 5 : length <= 50 ? 7 : 9) + volumeShift);
  const priority = selected.map((muscle) => ({ muscle, goal: state.muscleGoals[muscle] || "Hypertrophy", score: musclePriority(muscle) }));
  const notes = readinessNotes();
  const candidates = EXERCISES.filter((exercise) => isAvailable(exercise) && !state.blocked.includes(exercise.id));
  const chosen = [];
  const patternCounts = {};
  const muscleSets = Object.fromEntries(selected.map((muscle) => [muscle, 0]));

  priority
    .sort((a, b) => b.score - a.score)
    .forEach(({ muscle, goal }) => {
      if (chosen.length >= maxExercises) return;
      const targetSlots = goal === "Maintenance" ? 1 : goal === "Strength + Hypertrophy" ? 2 : 1;
      for (let slot = 0; slot < targetSlots && chosen.length < maxExercises; slot += 1) {
        if (muscleSets[muscle] >= targetSetsForGoal(goal, length)) break;
        const best = pickExercise({
          candidates,
          muscle,
          goal,
          chosen,
          patternCounts,
          primaryOnly: slot === 0,
        });
        if (!best) break;
        chosen.push(planExercise(best, muscle, goal));
        patternCounts[best.pattern] = (patternCounts[best.pattern] || 0) + 1;
        best.primary.concat(best.secondary).forEach((trainedMuscle) => {
          if (muscleSets[trainedMuscle] !== undefined) muscleSets[trainedMuscle] += plannedSets(goal);
        });
      }
    });

  chosen.sort((a, b) => orderScore(a.exercise) - orderScore(b.exercise));
  chosen.forEach((item, index) => (item.order = index + 1));
  fitSessionLength(chosen, length);
  chosen.forEach((item) => {
    item.baseline = snapshotPlan(item);
  });

  const duration = estimateDuration(chosen);
  const title = titleForWorkout(priority);
  const explanation = explanationForWorkout(priority, chosen.length, duration);

  return {
    id: crypto.randomUUID(),
    title,
    explanation,
    estimatedDuration: duration,
    createdAt: new Date().toISOString(),
    selectedMuscles: [...state.selectedMuscles],
    equipment: [...state.selectedEquipment],
    goals: { ...state.muscleGoals },
    readiness: { ...state.readiness },
    profile: { ...state.profile },
    calisthenics: { ...state.calisthenics },
    notes,
    exercises: chosen,
    routineNotes: "",
  };
}

function musclePriority(muscle) {
  const goal = state.muscleGoals[muscle] || "Hypertrophy";
  const goalScore = {
    "Strength + Hypertrophy": 6,
    Strength: 5,
    "Athletic / parkour carryover": 5,
    Hypertrophy: 4,
    "Low-hypertrophy strength": 3,
    Maintenance: 1,
  }[goal];
  return goalScore + (["Upper chest", "Quads", "Glutes", "Lats", "Hamstrings"].includes(muscle) ? 0.6 : 0);
}

function pickExercise({ candidates, muscle, goal, chosen, patternCounts, primaryOnly }) {
  const chosenIds = new Set(chosen.map((item) => item.exercise.id));
  const scored = candidates
    .filter((exercise) => !chosenIds.has(exercise.id))
    .filter((exercise) => exercise.primary.includes(muscle) || (!primaryOnly && exercise.secondary.includes(muscle)))
    .map((exercise) => ({ exercise, score: scoreExercise(exercise, muscle, goal, patternCounts) }))
    .sort((a, b) => b.score - a.score);
  return scored[0]?.exercise || null;
}

function recentlyUsedExerciseIds() {
  return new Set(state.logs.slice(0, 6).flatMap((log) => log.entries.map((entry) => entry.exerciseId)));
}

function shortenRest(rest) {
  if (rest.includes("4 min")) return rest;
  if (rest.includes("3 min")) return "2-3 min";
  if (rest.includes("2 min")) return "90 sec";
  if (rest.includes("90")) return "60-75 sec";
  return rest;
}

function lengthenRest(rest) {
  if (rest.includes("45")) return "60-75 sec";
  if (rest.includes("60")) return "75-90 sec";
  if (rest.includes("90")) return "2 min";
  if (rest.includes("2 min")) return "2-3 min";
  return rest;
}

function scoreExercise(exercise, muscle, goal, patternCounts) {
  let score = 0;
  const profile = state.profile;
  if (exercise.primary.includes(muscle)) score += 18;
  if (exercise.secondary.includes(muscle)) score += 7;
  if (exercise.bestGoals.includes(goal)) score += 12;
  if (state.favorites.includes(exercise.id)) score += 6;
  if (profile.novelty === "stable" && state.favorites.includes(exercise.id)) score += 4;
  if (profile.novelty === "varied" && recentlyUsedExerciseIds().has(exercise.id)) score -= 4;
  if (goal === "Strength" && exercise.defaultSets >= 3) score += 3;
  if (goal === "Hypertrophy" && exercise.fatigue <= 3) score += 2;
  if (goal === "Low-hypertrophy strength" && ["carry", "anti-rotation", "anti-lateral flexion", "anti-extension", "neck"].includes(exercise.pattern)) score += 7;
  if (goal === "Athletic / parkour carryover" && ["single leg", "jump", "landing", "plyometric", "carry", "adduction", "anti-rotation", "squat", "hinge"].includes(exercise.pattern)) score += 6;
  if (profile.hypertrophyBias >= 7 && ["fly", "lateral raise", "rear delt", "elbow extension", "curl", "knee extension", "knee flexion", "calf raise", "row"].includes(exercise.pattern)) score += profile.hypertrophyBias - 5;
  if (profile.strengthBias >= 7 && ["squat", "hinge", "horizontal press", "upper press", "vertical press", "vertical pull", "row"].includes(exercise.pattern)) score += profile.strengthBias - 4;
  if (profile.neuralBias >= 6 && ["jump", "landing", "plyometric", "single leg", "carry", "vertical press", "vertical pull"].includes(exercise.pattern)) score += profile.neuralBias - 3;
  if (profile.jumpBias >= 5 && ["jump", "landing", "plyometric"].includes(exercise.pattern)) score += profile.jumpBias + 3;
  if (profile.tendonBias >= 6 && ["plyometric", "landing", "calf raise", "adduction", "anti-rotation", "anti-lateral flexion"].includes(exercise.pattern)) score += profile.tendonBias - 4;
  score += calisthenicsScore(exercise, muscle);
  if (profile.trainingAge === "beginner") score -= Math.max(0, exercise.difficulty - 2) * 2;
  if (profile.trainingAge === "advanced" && exercise.difficulty >= 4) score += 2;
  if (profile.jumpExperience === "new" && ["jump", "plyometric"].includes(exercise.pattern)) score -= 6;
  if (profile.jumpExperience === "new" && exercise.pattern === "landing") score += 4;
  if (profile.jumpExperience === "trained" && ["jump", "plyometric"].includes(exercise.pattern)) score += 4;
  if (profile.technicalSkill <= 3) score -= Math.max(0, exercise.difficulty - 2) * 2;
  if (profile.technicalSkill >= 8 && exercise.difficulty >= 4) score += 3;
  if (profile.jointCaution >= 6) score -= exercise.jointStress * ((profile.jointCaution - 4) / 2);
  if (profile.limiter === "joints") score -= exercise.jointStress * 2;
  if (profile.limiter === "conditioning") score -= exercise.fatigue * 1.4;
  if (profile.limiter === "skill") score -= Math.max(0, exercise.difficulty - 2) * 2;
  if (profile.limiter === "setup" && exercise.equipment.length > 1) score -= 3;
  if (profile.surface === "hard" && ["jump", "landing", "plyometric"].includes(exercise.pattern)) score -= 5;
  if (profile.surface === "soft" && ["jump", "landing", "plyometric"].includes(exercise.pattern)) score += 2;
  if (state.readiness.energy === "low") score -= exercise.fatigue * 1.5;
  if (state.readiness.soreness === "high") score -= exercise.fatigue + exercise.jointStress;
  if (state.readiness.pain === "mild") score -= exercise.jointStress * 1.5;
  if (state.readiness.pain === "moderate") score -= exercise.jointStress * 3 + exercise.difficulty;
  score -= generatorInjuryPenalty(exercise);
  score -= (patternCounts[exercise.pattern] || 0) * 5;
  return score;
}

function calisthenicsScore(exercise, muscle) {
  if (!state.calisthenics.enabled || state.calisthenics.straightArmPriority <= 0) return 0;
  const priority = state.calisthenics.straightArmPriority;
  const relevantMuscles = ["Front delts", "Lats", "Abs", "Upper chest", "Mid/lower chest", "Rear delts"];
  let score = 0;
  if (exercise.pattern === "straight arm" && relevantMuscles.includes(muscle)) score += priority * 3;
  if (exercise.pattern === "straight arm" && exercise.primary.includes(muscle)) score += priority * 1.5;
  if (priority >= 7 && muscle === "Front delts" && ["vertical press", "upper press"].includes(exercise.pattern)) score -= priority * 2;
  if (priority >= 7 && muscle === "Lats" && ["vertical pull", "row"].includes(exercise.pattern)) score -= priority;
  if (priority >= 8 && exercise.id === "planche-lean") score += 8;
  if (priority >= 8 && exercise.id === "tuck-front-lever-hold") score += 8;
  return score;
}

function generatorInjuryPenalty(exercise) {
  return activeGeneratorInjuries().reduce((penalty, injury) => {
    const pain = injury.pain;
    const patterns = injuryPatterns(injury.id);
    const muscles = injuryMuscles(injury.id);
    const directPattern = patterns.includes(exercise.pattern);
    const directMuscle = exercise.primary.concat(exercise.secondary).some((muscle) => muscles.includes(muscle));
    const multiplier = directPattern && directMuscle ? 3.5 : directPattern || directMuscle ? 2.2 : 0;
    return penalty + pain * multiplier + (pain >= 6 && multiplier ? exercise.jointStress * 3 : 0);
  }, 0);
}

function activeGeneratorInjuries() {
  return GENERATOR_INJURIES
    .map(([id, label]) => ({ id, label, ...(state.generatorInjuries[id] || {}) }))
    .filter((injury) => injury.active && injury.pain > 0);
}

function injuryPatterns(id) {
  return {
    shoulder: ["upper press", "horizontal press", "vertical press", "vertical pull", "fly", "rear delt"],
    elbow: ["vertical pull", "row", "curl", "elbow extension", "horizontal press", "upper press", "vertical press"],
    knee: ["squat", "single leg", "knee extension", "jump", "landing", "plyometric"],
    ankle: ["jump", "landing", "plyometric", "calf raise", "single leg", "carry"],
    achilles: ["jump", "landing", "plyometric", "calf raise"],
  }[id] || [];
}

function injuryMuscles(id) {
  return {
    shoulder: ["Upper chest", "Mid/lower chest", "Front delts", "Side delts", "Rear delts", "Lats"],
    elbow: ["Triceps", "Biceps", "Forearms", "Lats"],
    knee: ["Quads", "Glutes", "Adductors"],
    ankle: ["Calves", "Quads", "Glutes"],
    achilles: ["Calves"],
  }[id] || [];
}

function exerciseHitsGeneratorInjury(exercise) {
  return activeGeneratorInjuries().filter((injury) => {
    return injuryPatterns(injury.id).includes(exercise.pattern) || exercise.primary.concat(exercise.secondary).some((muscle) => injuryMuscles(injury.id).includes(muscle));
  });
}

function planExercise(exercise, muscle, goal) {
  let sets = plannedSets(goal);
  let reps = exercise.defaultReps;
  let rest = exercise.defaultRest;
  let rir = exercise.defaultRir;
  const profile = state.profile;

  if (goal === "Strength") {
    reps = exercise.pattern.includes("carry") || exercise.pattern.includes("neck") ? exercise.defaultReps : "3-6";
    rest = "2-3 min";
    rir = "1-2";
  }
  if (goal === "Hypertrophy") {
    reps = exercise.pattern.includes("raise") || exercise.pattern.includes("curl") || exercise.pattern.includes("extension") ? "10-20" : "8-12";
    rest = "60-90 sec";
    rir = "1-3";
  }
  if (goal === "Strength + Hypertrophy") {
    reps = ["squat", "hinge", "horizontal press", "upper press", "vertical pull", "row"].includes(exercise.pattern) ? "5-8" : "8-12";
    rest = "2 min";
    rir = "1-2";
  }
  if (goal === "Low-hypertrophy strength") {
    sets = Math.min(sets, 2);
    reps = exercise.defaultReps.includes("sec") ? exercise.defaultReps : "5-8 controlled";
    rest = "60-90 sec";
    rir = "2-4";
  }
  if (goal === "Maintenance") {
    sets = 1;
    reps = exercise.defaultReps;
    rest = "60-90 sec";
    rir = "2-3";
  }
  if (goal === "Athletic / parkour carryover") {
    reps = ["jump", "landing", "plyometric"].includes(exercise.pattern) ? "2-5 crisp reps" : exercise.defaultReps;
    rest = "75 sec-2 min";
    rir = "2-3";
  }
  if (exercise.pattern === "straight arm") {
    sets = Math.min(Math.max(sets, 2), 4);
    reps = exercise.defaultReps.includes("sec") ? exercise.defaultReps : "6-12 controlled";
    rest = state.calisthenics.straightArmPriority >= 7 ? "90 sec-2 min" : rest;
    rir = "2-4";
  }

  if (profile.hypertrophyBias >= 8 && goal.includes("Hypertrophy") && !["jump", "landing", "plyometric"].includes(exercise.pattern)) {
    sets += 1;
    rest = rest === "2 min" ? "90 sec-2 min" : rest;
  }
  if (profile.strengthBias >= 8 && ["squat", "hinge", "horizontal press", "upper press", "vertical press", "vertical pull"].includes(exercise.pattern)) {
    reps = ["jump", "landing", "plyometric"].includes(exercise.pattern) ? reps : "3-6";
    rest = "2-4 min";
    rir = "1-2";
  }
  if (profile.neuralBias >= 7 || profile.jumpBias >= 7) {
    if (["jump", "landing", "plyometric"].includes(exercise.pattern)) {
      sets = Math.max(2, Math.min(sets + 1, 4));
      reps = exercise.pattern === "landing" ? "3-5 perfect reps" : "2-4 explosive reps";
      rest = "90 sec-3 min";
      rir = "4";
    } else if (profile.neuralBias >= 7 && exercise.fatigue <= 3) {
      rir = "2-4";
    }
  }
  if (profile.tendonBias >= 7 && ["calf raise", "adduction", "anti-lateral flexion", "anti-rotation"].includes(exercise.pattern)) {
    reps = exercise.defaultReps.includes("sec") ? exercise.defaultReps : "8-12 with pauses";
  }
  if (profile.density === "dense" && !rest.includes("4 min")) rest = shortenRest(rest);
  if (profile.density === "easy") rest = lengthenRest(rest);
  if (profile.jointCaution >= 8) rir = goal === "Strength" ? "2-3" : "3-4";
  if (profile.limiter === "conditioning") sets = Math.max(1, sets - 1);
  if (profile.limiter === "joints") rir = "3-4";
  if (profile.jumpExperience === "new" && ["jump", "landing", "plyometric"].includes(exercise.pattern)) {
    sets = Math.min(sets, 2);
    reps = exercise.pattern === "landing" ? "3 perfect reps" : "2-3 easy reps";
  }

  if (Number(state.readiness.length) <= 20) sets = Math.min(sets, 2);
  if (state.readiness.energy === "low") sets = Math.max(1, sets - 1);
  if (state.readiness.soreness === "high") sets = Math.max(1, sets - 1);
  if (state.readiness.pain === "moderate") {
    sets = Math.max(1, Math.min(sets, 2));
    rir = "3-4";
  }
  const hitInjuries = exerciseHitsGeneratorInjury(exercise);
  if (hitInjuries.length) {
    const maxPain = Math.max(...hitInjuries.map((injury) => injury.pain));
    if (maxPain >= 3) {
      sets = Math.max(1, sets - 1);
      rir = maxPain >= 6 ? "4-5" : "3-4";
    }
    if (maxPain >= 6) rest = lengthenRest(rest);
  }
  const tempo = tempoForExercise(exercise, goal);
  if (hitInjuries.length && Math.max(...hitInjuries.map((injury) => injury.pain)) >= 3) {
    tempo.eccentric = ["jump", "landing", "plyometric"].includes(exercise.pattern) ? "Low impact / controlled" : "3 sec controlled";
    tempo.concentric = "Smooth, no pain spike";
  }

  return {
    id: crypto.randomUUID(),
    exerciseId: exercise.id,
    exercise,
    targetMuscle: muscle,
    goal,
    sets,
    reps,
    rest,
    rir,
    eccentric: tempo.eccentric,
    concentric: tempo.concentric,
    why: whySelected(exercise, muscle, goal),
    tradeoff: hitInjuries.length ? injuryTradeoff(hitInjuries) : "",
  };
}

function injuryTradeoff(injuries) {
  const labels = injuries.map((injury) => `${injury.label} ${injury.pain}/10`).join(", ");
  return `Injury adaptation active: ${labels}. Volume, effort, and tempo were made more conservative. Stop if pain climbs during the set.`;
}

function tempoForExercise(exercise, goal) {
  if (["jump", "landing", "plyometric"].includes(exercise.pattern)) return { eccentric: "Fast but controlled", concentric: "Explosive" };
  if (exercise.pattern === "straight arm") return { eccentric: "Hold / slow lean", concentric: "Locked-arm control" };
  if (exercise.id === "pull-up-negative") return { eccentric: "5 sec", concentric: "Assisted to top" };
  if (goal === "Strength") return { eccentric: "2-3 sec", concentric: "Fast intent" };
  if (goal === "Hypertrophy") return { eccentric: "2-4 sec", concentric: "Controlled hard" };
  if (goal === "Strength + Hypertrophy") return { eccentric: "2-3 sec", concentric: "Fast but clean" };
  if (goal === "Low-hypertrophy strength") return { eccentric: "3-5 sec", concentric: "Smooth" };
  if (goal === "Athletic / parkour carryover") return { eccentric: "Controlled", concentric: "Crisp / explosive" };
  return { eccentric: "2-3 sec", concentric: "Controlled" };
}

function snapshotPlan(item) {
  return {
    exerciseId: item.exercise.id,
    targetMuscle: item.targetMuscle,
    goal: item.goal,
    sets: item.sets,
    reps: item.reps,
    rest: item.rest,
    rir: item.rir,
    eccentric: item.eccentric,
    concentric: item.concentric,
    why: item.why,
  };
}

function applyPlanSnapshot(item, snapshot) {
  const exercise = EXERCISES.find((candidate) => candidate.id === snapshot.exerciseId) || item.exercise;
  return {
    ...item,
    exerciseId: exercise.id,
    exercise,
    targetMuscle: snapshot.targetMuscle,
    goal: snapshot.goal,
    sets: snapshot.sets,
    reps: snapshot.reps,
    rest: snapshot.rest,
    rir: snapshot.rir,
    eccentric: snapshot.eccentric || tempoForExercise(exercise, snapshot.goal).eccentric,
    concentric: snapshot.concentric || tempoForExercise(exercise, snapshot.goal).concentric,
    why: snapshot.why || whySelected(exercise, snapshot.targetMuscle, snapshot.goal),
    tradeoff: "",
    isRegressed: false,
    baseline: snapshot,
  };
}

function plannedSets(goal) {
  const base = {
    Hypertrophy: 3,
    Strength: 3,
    "Strength + Hypertrophy": 3,
    "Low-hypertrophy strength": 2,
    Maintenance: 1,
    "Athletic / parkour carryover": 2,
  }[goal];
  if (state.profile.volumeTolerance >= 8 && goal !== "Maintenance") return base + 1;
  if (state.profile.volumeTolerance <= 2) return Math.max(1, base - 1);
  return base;
}

function targetSetsForGoal(goal, length) {
  const base = {
    Hypertrophy: 5,
    Strength: 4,
    "Strength + Hypertrophy": 6,
    "Low-hypertrophy strength": 3,
    Maintenance: 1,
    "Athletic / parkour carryover": 4,
  }[goal];
  let adjusted = length <= 20 ? Math.min(base, 3) : length >= 70 ? base + 2 : base;
  if (state.profile.volumeTolerance >= 8) adjusted += 2;
  if (state.profile.volumeTolerance <= 2) adjusted = Math.max(1, adjusted - 2);
  return adjusted;
}

function whySelected(exercise, muscle, goal) {
  const fit = exercise.bestGoals.includes(goal) ? `It directly fits ${goal.toLowerCase()} for ${muscle.toLowerCase()}.` : `It is the closest available fit for ${goal.toLowerCase()} while still training ${muscle.toLowerCase()}.`;
  return `${fit} ${exercise.why}`;
}

function readinessNotes() {
  const notes = [];
  if (state.readiness.energy === "low") notes.push("Low energy: volume and fatigue cost were reduced.");
  if (state.readiness.soreness === "high") notes.push("High soreness: the engine biased away from high-fatigue and heavily stretched options.");
  if (state.readiness.pain === "mild") notes.push("Mild pain: lower joint-stress options were preferred where possible.");
  if (state.readiness.pain === "moderate") notes.push("Moderate pain: use controlled effort, avoid sharp pain, and consider medical guidance.");
  if (Number(state.readiness.length) <= 20) notes.push("Short session: the plan favors compact compound choices and low setup time.");
  if (state.profile.jumpBias >= 7) notes.push("High jump bias: jumps and landing work are treated as quality practice, not conditioning.");
  if (state.profile.neuralBias >= 7) notes.push("High neural bias: stop explosive sets before speed drops.");
  if (state.profile.jointCaution >= 8) notes.push("High joint caution: the engine raises RIR and penalizes joint-stress-heavy choices.");
  if (state.profile.surface === "hard" && state.profile.jumpBias >= 5) notes.push("Hard surface: jump options are reduced and should stay low impact.");
  if (state.profile.limiter === "joints") notes.push("Limiter: joints/tendons. Joint stress is penalized and effort targets are more conservative.");
  if (state.profile.limiter === "conditioning") notes.push("Limiter: conditioning. The engine trims fatigue and avoids turning power work into cardio.");
  if (state.profile.jumpExperience === "new" && state.profile.jumpBias >= 5) notes.push("Jump experience: new. Landing skill is preferred before higher-output jumps.");
  if (state.calisthenics.enabled && state.calisthenics.straightArmPriority >= 6) notes.push(`Calisthenics bias: straight-arm strength priority ${state.calisthenics.straightArmPriority}/10, so relevant muscles favor planche/front-lever/scapular patterns when equipment allows.`);
  activeGeneratorInjuries().forEach((injury) => {
    notes.push(`${injury.label} injury: average working pain ${injury.pain}/10. The engine avoids high-stress matching patterns where possible and uses higher RIR when not possible.`);
  });
  return notes;
}

function titleForWorkout(priority) {
  const main = priority.sort((a, b) => b.score - a.score).slice(0, 2).map((item) => item.muscle).join(" + ");
  return `${main || "Full"} Session`;
}

function explanationForWorkout(priority, count, duration) {
  const goals = [...new Set(priority.map((item) => item.goal))].slice(0, 3).join(", ");
  return `Built around ${goals.toLowerCase()} with ${count} exercises in coach-style order. Estimated duration: ${duration} minutes.`;
}

function isAvailable(exercise) {
  return exercise.equipment.every((item) => state.selectedEquipment.includes(item));
}

function orderScore(exercise) {
  if (state.profile && (state.profile.jumpBias >= 6 || state.profile.neuralBias >= 7) && ["jump", "landing", "plyometric"].includes(exercise.pattern)) {
    return 0.5;
  }
  const order = {
    squat: 1,
    hinge: 1,
    "horizontal press": 1,
    "upper press": 1,
    "vertical press": 1,
    "vertical pull": 1,
    row: 2,
    "single leg": 2,
    "knee extension": 3,
    "knee flexion": 3,
    adduction: 3,
    fly: 4,
    "lateral raise": 4,
    "rear delt": 4,
    "elbow extension": 4,
    curl: 4,
    "calf raise": 4,
    jump: 5,
    landing: 5,
    plyometric: 5,
    "anti-extension": 5,
    "anti-rotation": 5,
    "anti-lateral flexion": 5,
    carry: 5,
    grip: 5,
    neck: 6,
  };
  return order[exercise.pattern] || 4;
}

function estimateDuration(exercises) {
  const setCount = exercises.reduce((sum, item) => sum + Number(item.sets || 0), 0);
  return Math.max(10, Math.round(exercises.length * 2 + setCount * 2.2));
}

function fitSessionLength(exercises, targetLength) {
  const floorForGoal = (goal) => (goal === "Maintenance" ? 1 : goal === "Low-hypertrophy strength" ? 1 : 2);
  let changed = true;
  while (changed && estimateDuration(exercises) > targetLength + 5) {
    changed = false;
    for (let i = exercises.length - 1; i >= 0 && estimateDuration(exercises) > targetLength + 5; i -= 1) {
      const item = exercises[i];
      if (item.sets > floorForGoal(item.goal)) {
        item.sets -= 1;
        changed = true;
      }
    }
  }
}

function generateJumpBlock() {
  const profile = { ...state.jumpProfile };
  const diagnosis = classifyJumpAthlete(profile);
  const goals = normalizedJumpGoals(profile);
  const goal = jumpGoalTitle(goals);
  const sessionsPerWeek = Number(profile.sessions);
  const weeks = Array.from({ length: 8 }, (_, index) => buildJumpWeek(index + 1, profile, diagnosis, sessionsPerWeek));
  const notes = jumpBlockNotes(profile, diagnosis);
  return {
    id: crypto.randomUUID(),
    title: `${goal} 8-Week Block`,
    createdAt: new Date().toISOString(),
    goal,
    goals,
    profile,
    diagnosis,
    notes,
    weeks,
  };
}

function classifyJumpAthlete(profile) {
  const strengthGap = profile.maxStrength - Math.round((profile.fastStrength + profile.reactiveStiffness) / 2);
  const elasticGap = Math.round((profile.reactiveStiffness + profile.elasticSkill) / 2) - profile.maxStrength;
  const fastGap = profile.fastStrength - Math.round((profile.maxStrength + profile.tendonTolerance) / 2);
  const injuryRisk = Math.max(jumpInjuryPain("knee"), jumpInjuryPain("achilles")) >= 5 ? 2 : Math.max(jumpInjuryPain("knee"), jumpInjuryPain("achilles")) >= 3 ? 1 : 0;
  const controlRisk = Math.min(3, Math.max(0, 6 - Math.min(profile.singleLegControl, profile.landingConfidence, profile.tendonTolerance)) + injuryRisk);

  if (elasticGap >= 3) {
    return {
      type: "Tendon-dominant jumper",
      weakness: "You probably get a lot from bounce, stiffness, and elastic timing, but need more deep force production and controlled landing strength.",
      focus: "Prioritize slow strength, deep ROM, isometrics, and fewer high-intensity contacts.",
      risk: controlRisk,
    };
  }
  if (strengthGap >= 3) {
    return {
      type: "Slow-strength dominant jumper",
      weakness: "You likely have force available, but it is not showing up quickly enough in short ground contacts or takeoff timing.",
      focus: "Prioritize rate of force development, low-volume plyos, short sprints, and intent on every rep.",
      risk: controlRisk,
    };
  }
  if (fastGap >= 3) {
    return {
      type: "Fast-strength dominant jumper",
      weakness: "You can express speed, but your ceiling may be limited by max force, tendon capacity, and landing control.",
      focus: "Prioritize force base, unilateral strength, calf/adductor capacity, and controlled jump volume.",
      risk: controlRisk,
    };
  }
  return {
    type: "Hybrid jumper",
    weakness: "Your profile is balanced enough that the best block should rotate strength, elasticity, sprint skill, and specific jump practice.",
    focus: "Use balanced exposure and let the main goal decide the specific emphasis.",
    risk: controlRisk,
  };
}

function activeJumpInjuries() {
  return JUMP_INJURIES
    .map(([id, label]) => ({ id, label, ...(state.jumpInjuries[id] || {}) }))
    .filter((injury) => injury.active && injury.pain > 0);
}

function jumpInjuryPain(id) {
  const injury = state.jumpInjuries[id];
  return injury?.active ? Number(injury.pain || 0) : 0;
}

function jumpInjuryContext() {
  const knee = jumpInjuryPain("knee");
  const achilles = jumpInjuryPain("achilles");
  return {
    knee,
    achilles,
    any: Math.max(knee, achilles),
    high: Math.max(knee, achilles) >= 6,
    moderate: Math.max(knee, achilles) >= 3,
  };
}

function buildJumpWeek(weekNumber, profile, diagnosis, sessionsPerWeek) {
  const phase = jumpPhase(weekNumber);
  const focusPlan = jumpFocusPlan(normalizedJumpGoals(profile), sessionsPerWeek, diagnosis, profile);
  const sessions = focusPlan.map((focus, index) => buildJumpSession(focus, index, weekNumber, phase, profile, diagnosis));
  return {
    week: weekNumber,
    phase: phase.name,
    intent: phase.intent,
    volume: phase.volume,
    sessions,
  };
}

function jumpPhase(week) {
  if (week <= 2) return { name: "Foundation", intent: "Build landing quality, tissue tolerance, and clean mechanics.", volume: "Moderate contacts, conservative intensity" };
  if (week <= 4) return { name: "Build", intent: "Add force and stiffness while keeping jump quality high.", volume: "Moderate-high output, controlled volume" };
  if (week <= 6) return { name: "Specific Power", intent: "Make the work look more like the target jump or sprint.", volume: "High intensity, lower junk volume" };
  if (week === 7) return { name: "Peak", intent: "Express speed and power with full recovery.", volume: "Low volume, very high quality" };
  return { name: "Deload + Test", intent: "Freshen up and test the main goal.", volume: "Low volume, test-ready" };
}

function jumpFocusPlan(goals, sessionsPerWeek, diagnosis, profile) {
  const plans = {
    vertical: ["Force + vertical power", "Reactive stiffness", "Specific vertical practice"],
    approachVertical: ["Acceleration + approach", "Approach vertical practice", "Reactive stiffness"],
    standingBroad: ["Horizontal power", "Bounds + takeoff", "Landing + rhythm"],
    runningLongJump: ["Acceleration + approach", "Bounds + takeoff", "Landing + rhythm"],
    acceleration: ["Acceleration", "Horizontal power", "Posterior chain strength"],
    maxVelocity: ["Max velocity rhythm", "Elastic stiffness", "Hamstring resilience"],
    sprintSpeed: ["Acceleration", "Max velocity rhythm", "Elastic stiffness"],
    reactiveStiffness: ["Reactive stiffness", "Elastic stiffness", "Tissue capacity"],
    tendonDurability: ["Tissue capacity", "Calf + tendon capacity", "Landing + rhythm"],
    landingSkill: ["Landing + rhythm", "Single-leg control", "Tissue capacity"],
  };
  const diagnosisFocus = {
    "Tendon-dominant jumper": "Force + vertical power",
    "Slow-strength dominant jumper": "Reactive stiffness",
    "Fast-strength dominant jumper": "Tissue capacity",
    "Hybrid jumper": "Specific vertical practice",
  }[diagnosis.type];
  const strengthFocus = jumpStrengthFocus(profile);
  const insuranceFocus = profile.insurance === "high" ? ["Tissue capacity", "Single-leg control"] : profile.insurance === "medium" ? ["Tissue capacity"] : [];
  const blended = [...goals.flatMap((goal) => plans[goal] || []), diagnosisFocus, ...strengthFocus, ...insuranceFocus];
  return [...new Set(blended)].slice(0, sessionsPerWeek);
}

function buildJumpSession(focus, index, week, phase, profile, diagnosis) {
  const warmup = index === 0 ? "Warm-up: skips, ankle rocks, hip switches, 2 x 20m build-ups" : "Warm-up: pogos, snap-downs, marching switches, 2 relaxed build-ups";
  const drills = [
    warmup,
    ...jumpMainDrills(focus, week, phase, profile, diagnosis),
    jumpStrengthDrill(focus, week, profile, diagnosis),
    ...jumpInsuranceDrills(focus, week, profile, diagnosis),
  ].filter(Boolean);
  return {
    name: `Session ${String.fromCharCode(65 + index)} - ${focus}`,
    drills,
    cue: sessionCue(focus, diagnosis),
  };
}

function jumpMainDrills(focus, week, phase, profile, diagnosis) {
  const low = phase.name === "Foundation";
  const peak = phase.name === "Peak" || phase.name === "Deload + Test";
  const newJumper = profile.experience === "new";
  const hardSurface = profile.surface === "hard";
  const injury = jumpInjuryContext();
  const contactCap = hardSurface || newJumper || diagnosis.risk >= 2 || injury.moderate;
  const setText = peak ? "3-4 x 2" : low || contactCap ? "3 x 3" : "4-5 x 2-4";
  if (injury.high) {
    if (focus.includes("Reactive") || focus.includes("Elastic")) {
      return [
        `${injury.achilles >= injury.knee ? "Seated calf isometric or wall calf hold" : "Wall sit or Spanish squat isometric"} - 3 x 20-30 sec, pain <=3/10`,
        "Snap Down to quarter-depth stick - 2-3 x 3, low impact",
      ];
    }
    if (focus.includes("Acceleration") || focus.includes("Max velocity") || focus.includes("Bounds") || focus.includes("takeoff")) {
      return [
        "Marching acceleration drill - 4 x 15m, no sprinting through pain",
        "Low amplitude snap-down or step landing - 2-3 x 3",
      ];
    }
    if (focus.includes("vertical") || focus.includes("Horizontal") || focus.includes("Approach")) {
      return [
        "Technique rehearsal without max jump - 3 x 3",
        "Low box step-off to stick - 2-3 x 2, pain <=3/10",
      ];
    }
  }

  if (focus.includes("vertical")) {
    return [
      `${newJumper ? "Snap Down" : "Countermovement Jump"} - ${setText}, full reset`,
      `${week >= 5 && !newJumper ? "Approach Jump" : "Box Jump or target jump"} - ${peak ? "3 x 2" : "3-4 x 2-3"}`,
    ];
  }
  if (focus.includes("Approach vertical")) {
    return [
      `Approach jump rhythm - ${peak ? "3 x 2" : "4 x 2-3"}, full reset`,
      `${newJumper ? "Snap Down" : "Penultimate pop-up"} - ${contactCap ? "3 x 3" : "4 x 3"}`,
    ];
  }
  if (focus.includes("Horizontal power")) {
    return [
      `${newJumper ? "Broad Jump to stick" : "Broad Jump"} - ${setText}, full reset`,
      `${week >= 5 && !newJumper ? "Single-leg takeoff pop" : "Skater Bound to stick"} - ${contactCap ? "3 x 3 each" : "4 x 3 each"}`,
    ];
  }
  if (focus.includes("Reactive") || focus.includes("Elastic")) {
    return [
      `${hardSurface ? "Low pogo in place" : "Pogo Hop"} - ${low ? "4 x 12 sec" : "5 x 10-15 sec"}`,
      `${diagnosis.type === "Slow-strength dominant jumper" ? "Drop to stick + quick rebound" : "Snap Down"} - ${contactCap ? "3 x 3" : "4 x 3"}`,
    ];
  }
  if (focus.includes("Acceleration")) {
    return [
      `Acceleration sprint - ${peak ? "4 x 10-20m" : "5-7 x 10-20m"}, full walk-back`,
      `${hasJumpGoal(profile, "runningLongJump") || hasJumpGoal(profile, "approachVertical") ? "Approach run rhythm" : "Falling start"} - 4 x smooth reps`,
    ];
  }
  if (focus.includes("Bounds") || focus.includes("takeoff")) {
    return [
      `${newJumper ? "Skater Bound to stick" : "Alternate bounds"} - ${contactCap ? "3 x 3 each" : "4 x 4 each"}`,
      `Penultimate step drill - 3 x 4 reps`,
    ];
  }
  if (focus.includes("Landing")) {
    return [
      `Landing stick series - 4 x 3`,
      `${newJumper ? "Step-off landing" : "Broad Jump to stick"} - ${contactCap ? "3 x 2" : "4 x 2-3"}`,
    ];
  }
  if (focus.includes("Max velocity")) {
    return [
      `Flying sprint - ${peak ? "3 x 20m fly" : "4-5 x 10-20m fly"}, full recovery`,
      `Wicket rhythm or dribble run - 4 x 15-25m`,
    ];
  }
  if (focus.includes("Hamstring")) {
    return [
      `Flying sprint or fast build-up - ${peak ? "3 x 15-20m" : "4 x 15-25m"}, full recovery`,
      `A-skip to run-out - 4 x 20m`,
    ];
  }
  if (focus.includes("Single-leg")) {
    return [
      `Step-down to stick - ${contactCap ? "3 x 4 each" : "4 x 4 each"}`,
      `Skater Bound to stick - ${contactCap ? "3 x 3 each" : "4 x 4 each"}`,
    ];
  }
  return [
    `Extensive pogo or line hop - ${contactCap ? "3 x 12 sec" : "4 x 15 sec"}`,
    `Tempo jump skill - 3 x 3 easy reps`,
  ];
}

function jumpStrengthDrill(focus, week, profile, diagnosis) {
  const heavy = week >= 3 && week <= 6;
  const strength = bestLowerStrengthExercise(profile);
  const unilateral = bestUnilateralExercise(profile);
  const hinge = bestHingeExercise(profile);
  const injury = jumpInjuryContext();
  const weakLink = bestStrengthLinkForFocus(profile, focus);

  if (injury.high) {
    if (injury.knee >= injury.achilles) return `${hinge} - 2-3 x 6-8, knee-friendly range, pain <=3/10`;
    return `${strength} - 2-3 x 6-8, controlled tempo, no Achilles pain spike`;
  }
  if (weakLink) return formatJumpStrengthSupport(profile, weakLink.key, heavy ? "main" : "foundation", injury);
  if (profile.insurance === "high") return `${strength} - ${heavy ? "4 x 4-6" : "3 x 5-8"}, smooth force`;
  if (profile.insurance === "low" && (focus.includes("vertical") || focus.includes("Force"))) return `${strength} - ${heavy ? "3-4 x 4-6" : "3 x 5-8"}`;
  if (diagnosis.type === "Tendon-dominant jumper") return `${strength} - ${heavy ? "4 x 4-6" : "3 x 5-8"}, deep controlled ROM`;
  if (diagnosis.type === "Fast-strength dominant jumper") return `${strength} + ${hinge} - ${heavy ? "3 x 4 each" : "2-3 x 5 each"}, full recovery`;
  if (diagnosis.type === "Slow-strength dominant jumper") return `${focus.includes("strength") ? strength : "Jump squat or fast goblet squat"} - 3 x 3-5, move fast`;
  if (focus.includes("Posterior")) return `${hinge} - ${heavy ? "4 x 5" : "3 x 6"}`;
  return `${unilateral} - ${heavy ? "3 x 5 each" : "2-3 x 6 each"}`;
}

function jumpInsuranceDrills(focus, week, profile, diagnosis) {
  const strength = bestLowerStrengthExercise(profile);
  const calf = bestCalfExercise(profile);
  const hinge = bestHingeExercise(profile);
  const adductor = bestAdductorExercise(profile);
  const unilateral = bestUnilateralExercise(profile);
  const high = profile.insurance === "high";
  const medium = profile.insurance === "medium";
  const injury = jumpInjuryContext();
  const weakLinks = jumpStrengthLinks(profile).weak;
  const strongLinks = jumpStrengthLinks(profile).strong;
  const calfIsStrong = strongLinks.some((link) => link.key === "calfStrength");
  const needsTendon = (profile.tendonTolerance <= 4 || diagnosis.type === "Fast-strength dominant jumper" || hasJumpGoal(profile, "tendonDurability") || injury.achilles >= 3)
    && !(calfIsStrong && profile.tendonTolerance > 4 && !hasJumpGoal(profile, "tendonDurability") && injury.achilles < 3);
  const drills = [];
  const pushUnique = (drill) => {
    const name = drill.split(" - ")[0];
    if (!drills.some((existing) => existing.startsWith(`${name} - `))) drills.push(drill);
  };

  if (profile.insurance === "low") {
    const lowPriority = needsTendon ? "calfStrength" : weakLinks[0]?.key;
    drills.push(lowPriority ? formatJumpStrengthSupport(profile, lowPriority, "low", injury) : `${injury.achilles >= 4 ? "Calf isometric hold" : calf} - 2-3 x ${injury.achilles >= 4 ? "20-30 sec" : "8-12"}, controlled`);
    return drills;
  }

  weakLinks.slice(0, high ? 3 : 1).forEach((link) => pushUnique(formatJumpStrengthSupport(profile, link.key, "support", injury)));
  if (high || needsTendon || focus.includes("Tissue") || focus.includes("Calf")) pushUnique(`${injury.achilles >= 4 ? "Calf isometric hold" : calf} - ${injury.achilles >= 4 ? "3 x 20-30 sec" : high ? "3-4 x 8-12" : "3 x 8-10"}, controlled`);
  if (medium || high) pushUnique(`${hinge} - ${week >= 3 && week <= 6 ? "3 x 5-6" : "2-3 x 6-8"}`);
  if (high) pushUnique(`${adductor} - 2-3 x 8-12`);
  if (high || profile.singleLegControl <= 5 || profile.landingConfidence <= 5) pushUnique(`${injury.knee >= 4 ? "Step-down to comfortable depth" : unilateral} - 2-3 x 5-8 each`);
  if (!drills.length) pushUnique("Easy trunk brace or suitcase carry - 2 rounds, low fatigue");
  return drills.slice(0, high ? 4 : 2);
}

function jumpStrengthLinks(profile) {
  if (!profile.useStrengthProfile) return { weak: [], strong: [] };
  const scores = JUMP_STRENGTH_SLIDERS.map(([key]) => ({ key, value: Number(profile[key] ?? 5) }));
  const average = scores.reduce((total, item) => total + item.value, 0) / scores.length;
  const weak = scores
    .filter((item) => item.value <= 4 || (item.value <= 6 && average - item.value >= 2))
    .sort((a, b) => a.value - b.value);
  const strong = scores
    .filter((item) => item.value >= 8 || (item.value >= 7 && item.value - average >= 2))
    .sort((a, b) => b.value - a.value);
  return { weak, strong };
}

function jumpStrengthFocus(profile) {
  const focusByKey = {
    quadStrength: "Force + vertical power",
    hamstringStrength: "Hamstring resilience",
    calfStrength: "Calf + tendon capacity",
    gluteStrength: "Horizontal power",
    adductorStrength: "Single-leg control",
    trunkStrength: "Landing + rhythm",
  };
  return jumpStrengthLinks(profile).weak.map((link) => focusByKey[link.key]).filter(Boolean);
}

function bestStrengthLinkForFocus(profile, focus) {
  const weakLinks = jumpStrengthLinks(profile).weak;
  if (!weakLinks.length) return null;
  const preferred = [
    [focus.includes("Hamstring") || focus.includes("Posterior") || focus.includes("Max velocity") || focus.includes("Acceleration"), "hamstringStrength"],
    [focus.includes("Calf") || focus.includes("Tissue") || focus.includes("Reactive") || focus.includes("Elastic"), "calfStrength"],
    [focus.includes("Horizontal") || focus.includes("Bounds") || focus.includes("takeoff"), "gluteStrength"],
    [focus.includes("Single-leg") || focus.includes("Landing"), "adductorStrength"],
    [focus.includes("Landing"), "trunkStrength"],
    [focus.includes("vertical") || focus.includes("Force"), "quadStrength"],
  ].find(([matches, key]) => matches && weakLinks.some((link) => link.key === key));
  return preferred ? weakLinks.find((link) => link.key === preferred[1]) : weakLinks[0];
}

function formatJumpStrengthSupport(profile, key, role, injury) {
  const exerciseByKey = {
    quadStrength: injury.knee >= 4 ? "Leg Press to comfortable depth" : bestLowerStrengthExercise(profile),
    hamstringStrength: bestHingeExercise(profile),
    calfStrength: injury.achilles >= 4 ? "Calf isometric hold" : bestCalfExercise(profile),
    gluteStrength: bestGluteExercise(profile),
    adductorStrength: bestAdductorExercise(profile),
    trunkStrength: bestJumpTrunkExercise(profile),
  };
  const prescriptionByRole = {
    main: {
      quadStrength: "3-4 x 4-6, smooth force",
      hamstringStrength: "3-4 x 5-8, strong hinge or curl",
      calfStrength: injury.achilles >= 4 ? "3 x 20-30 sec, pain <=3/10" : "3-4 x 6-10, full range",
      gluteStrength: "3 x 5-8, drive through the hip",
      adductorStrength: "3 x 6-10 each, controlled pelvis",
      trunkStrength: "3 rounds, crisp bracing",
    },
    foundation: {
      quadStrength: "3 x 5-8, controlled depth",
      hamstringStrength: "2-3 x 6-8, no rushed eccentrics",
      calfStrength: injury.achilles >= 4 ? "3 x 20-30 sec, pain <=3/10" : "3 x 8-12, controlled",
      gluteStrength: "2-3 x 6-8, own the top position",
      adductorStrength: "2-3 x 8-12, slow control",
      trunkStrength: "2-3 rounds, no spinal motion",
    },
    support: {
      quadStrength: "2-3 x 6-8, leave 2 reps in reserve",
      hamstringStrength: "2-3 x 6-8, controlled eccentric",
      calfStrength: injury.achilles >= 4 ? "3 x 20-30 sec, pain <=3/10" : "2-3 x 8-12, full range",
      gluteStrength: "2-3 x 8 each, stable pelvis",
      adductorStrength: "2-3 x 8-12, controlled",
      trunkStrength: "2 rounds, low fatigue",
    },
    low: {
      quadStrength: "2-3 x 5-8, efficient force work",
      hamstringStrength: "2-3 x 6-8, posterior-chain priority",
      calfStrength: injury.achilles >= 4 ? "2-3 x 20-30 sec, pain <=3/10" : "2-3 x 8-12, controlled",
      gluteStrength: "2-3 x 6-8, clean hip drive",
      adductorStrength: "2 x 8-12, easy support",
      trunkStrength: "2 rounds, low fatigue",
    },
  };
  return `${exerciseByKey[key]} - ${prescriptionByRole[role][key]} (${JUMP_STRENGTH_LABELS[key]} weak link)`;
}

function bestLowerStrengthExercise(profile) {
  if (profile.equipment.includes("Leg press")) return "Deep Leg Press";
  if (profile.equipment.includes("Barbell")) return "Back Squat";
  if (profile.equipment.includes("Dumbbells")) return "Goblet Squat";
  return "Tempo split squat";
}

function bestUnilateralExercise(profile) {
  if (profile.equipment.includes("Dumbbells") && profile.equipment.includes("Bench")) return "DB Bulgarian Split Squat";
  if (profile.equipment.includes("Bench")) return "Rear-foot elevated split squat";
  return "Split squat";
}

function bestHingeExercise(profile) {
  if (profile.equipment.includes("Hamstring curl")) return "Hamstring Curl";
  if (profile.equipment.includes("Barbell")) return "Barbell Romanian Deadlift";
  if (profile.equipment.includes("Dumbbells")) return "DB Romanian Deadlift";
  if (profile.equipment.includes("Back extension")) return "Back Extension";
  return "Single-leg hip hinge";
}

function bestCalfExercise(profile) {
  if (profile.equipment.includes("Calf raise machine")) return "Standing Calf Raise";
  if (profile.equipment.includes("Dumbbells")) return "DB Single-Leg Calf Raise";
  return "Single-Leg Calf Raise";
}

function bestAdductorExercise(profile) {
  if (profile.equipment.includes("Adductor machine")) return "Adductor Machine";
  if (profile.equipment.includes("Bench")) return "Copenhagen Plank";
  return "Side-lying adduction";
}

function bestGluteExercise(profile) {
  if (profile.equipment.includes("Barbell")) return "Barbell Hip Thrust";
  if (profile.equipment.includes("Dumbbells") && profile.equipment.includes("Bench")) return "DB Hip Thrust";
  if (profile.equipment.includes("Dumbbells")) return "DB Step-up";
  return "Single-leg glute bridge";
}

function bestJumpTrunkExercise(profile) {
  if (profile.equipment.includes("Dumbbells")) return "Suitcase Carry";
  if (profile.equipment.includes("Bands")) return "Band Pallof Press";
  return "Dead Bug to hard brace";
}

function sessionCue(focus, diagnosis) {
  if (focus.includes("Acceleration")) return "Stop the set when speed or posture drops.";
  if (focus.includes("Reactive") || focus.includes("Elastic")) return "Quiet contacts, stiff ankles, no grinding.";
  if (focus.includes("Landing")) return "Stick landings before asking for more height or distance.";
  if (diagnosis.type === "Slow-strength dominant jumper") return "Every power rep should look fast, crisp, and fresh.";
  return "Keep jump quality high and leave fatigue in the tank.";
}

function jumpBlockNotes(profile, diagnosis) {
  const notes = [
    diagnosis.focus,
    "Keep at least 48 hours between high-output jump sessions when possible.",
    "Cut jump contacts by 30-50% if Achilles, patellar tendon, or foot discomfort climbs during warm-ups.",
  ];
  if (hasJumpGoal(profile, "vertical")) notes.push("Vertical goal: the plan biases countermovement, approach jump, stiffness, and force production.");
  if (hasJumpGoal(profile, "runningLongJump")) notes.push("Running long jump goal: the plan biases approach rhythm, horizontal projection, bounds, and landing skill.");
  if (hasJumpGoal(profile, "sprintSpeed") || hasJumpGoal(profile, "acceleration") || hasJumpGoal(profile, "maxVelocity")) notes.push("Sprint goal: the plan biases acceleration, max velocity rhythm, posterior chain, and elastic contacts.");
  if (profile.insurance === "low") notes.push("Low insurance: keeps support work minimal, usually a main force lift plus calf/tendon support.");
  if (profile.insurance === "medium") notes.push("Medium insurance: adds hamstring or unilateral support without overloading the week.");
  if (profile.insurance === "high") notes.push("High insurance: adds adductors, hamstrings, calf/tendon work, and unilateral strength for more robust jumping.");
  const strengthLinks = jumpStrengthLinks(profile);
  if (profile.useStrengthProfile && strengthLinks.weak.length) {
    const weakText = strengthLinks.weak.map((link) => JUMP_STRENGTH_LABELS[link.key].toLowerCase()).join(", ");
    notes.push(`Strength profile: ${weakText} ${strengthLinks.weak.length === 1 ? "is" : "are"} behind, so support work is biased toward those weak links.`);
  }
  if (profile.useStrengthProfile && strengthLinks.strong.length) {
    const strongText = strengthLinks.strong.map((link) => JUMP_STRENGTH_LABELS[link.key].toLowerCase()).join(", ");
    notes.push(`Strength profile: ${strongText} ${strengthLinks.strong.length === 1 ? "is" : "are"} already strong, so they stay closer to maintenance unless your goal or injury status demands more.`);
  }
  if (profile.surface === "hard") notes.push("Hard surface: use lower contacts and avoid depth jumps unless you have a softer option.");
  if (profile.experience === "new") notes.push("New jumper: landing skill and low contacts come before aggressive plyometrics.");
  activeJumpInjuries().forEach((injury) => {
    notes.push(`${injury.label} injury: average working pain ${injury.pain}/10. Jump contacts, sprint intensity, and support work are adapted to keep working pain from climbing.`);
  });
  return notes;
}

function normalizedJumpGoals(profile) {
  return Array.isArray(profile.goals) && profile.goals.length ? profile.goals : [profile.goal || "vertical"];
}

function hasJumpGoal(profile, goal) {
  return normalizedJumpGoals(profile).includes(goal);
}

function jumpGoalName(goal) {
  return Object.fromEntries(JUMP_GOALS)[goal] || goal;
}

function jumpGoalTitle(goals) {
  const labels = goals.map(jumpGoalName);
  if (labels.length <= 2) return labels.join(" + ");
  return `${labels.slice(0, 2).join(" + ")} + ${labels.length - 2} more`;
}

function renderJumpBlock() {
  const container = document.getElementById("jumpBlockResult");
  const block = state.currentJumpBlock;
  if (!block) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `
    <article class="result-card">
      <div class="section-head">
        <div>
          <h2>${block.title}</h2>
          <p>${block.diagnosis.weakness}</p>
        </div>
      </div>
      <div class="meta-strip">
        <span class="pill good">${block.diagnosis.type}</span>
        <span class="pill">${block.profile.sessions} sessions/week</span>
        <span class="pill">${block.goal}</span>
        <span class="pill ${block.diagnosis.risk >= 2 ? "warn" : ""}">Control risk: ${block.diagnosis.risk}/3</span>
      </div>
      ${block.notes.map((note) => `<p class="note">${note}</p>`).join("")}
      <div class="card-actions">
        <button class="primary" id="saveJumpBlockBtn">Save Block</button>
      </div>
    </article>
    <div class="stack">
      ${block.weeks.map(renderJumpWeek).join("")}
    </div>
  `;
  document.getElementById("saveJumpBlockBtn")?.addEventListener("click", saveCurrentJumpBlock);
}

function renderJumpWeek(week) {
  return `
    <article class="block-week">
      <div class="inline-head">
        <h3>Week ${week.week}: ${week.phase}</h3>
        <span class="pill">${week.volume}</span>
      </div>
      <p>${week.intent}</p>
      <div class="week-grid">
        ${week.sessions.map((session) => `
          <section class="session-card">
            <h4>${session.name}</h4>
            <ul>${session.drills.map((drill) => `<li>${drill}</li>`).join("")}</ul>
            <p><strong>Cue:</strong> ${session.cue}</p>
          </section>
        `).join("")}
      </div>
    </article>
  `;
}

function saveCurrentJumpBlock() {
  if (!state.currentJumpBlock) return;
  const name = prompt("Jump block name", state.currentJumpBlock.title);
  if (!name) return;
  state.savedJumpBlocks.unshift({
    ...state.currentJumpBlock,
    id: crypto.randomUUID(),
    name,
    dateCreated: new Date().toISOString(),
  });
  saveState();
  renderSavedJumpBlocks();
  alert("Jump block saved.");
}

function renderSavedJumpBlocks() {
  const list = document.getElementById("savedJumpBlocks");
  if (!state.savedJumpBlocks.length) {
    list.className = "stack empty-state";
    list.textContent = "No jump blocks saved yet.";
    return;
  }
  list.className = "stack";
  list.innerHTML = state.savedJumpBlocks.map((block) => `
    <article class="list-item">
      <h3>${block.name}</h3>
      <p>${new Date(block.dateCreated).toLocaleString()} - ${block.diagnosis.type} - ${block.goal}</p>
      <div class="card-actions">
        <button class="primary" data-load-jump="${block.id}">Load</button>
        <button class="small-button danger" data-delete-jump="${block.id}">Delete</button>
      </div>
    </article>
  `).join("");
  list.querySelectorAll("[data-load-jump]").forEach((button) => button.addEventListener("click", () => loadJumpBlock(button.dataset.loadJump)));
  list.querySelectorAll("[data-delete-jump]").forEach((button) => button.addEventListener("click", () => deleteJumpBlock(button.dataset.deleteJump)));
}

function loadJumpBlock(id) {
  const block = state.savedJumpBlocks.find((item) => item.id === id);
  if (!block) return;
  state.currentJumpBlock = structuredClone(block);
  state.jumpProfile = { ...defaultJumpProfile, ...(block.profile || {}) };
  saveState();
  hydrateJumpProfile();
  renderJumpBlock();
}

function deleteJumpBlock(id) {
  state.savedJumpBlocks = state.savedJumpBlocks.filter((item) => item.id !== id);
  saveState();
  renderSavedJumpBlocks();
}

function generateRecompPlan() {
  const profile = { ...state.recompProfile };
  const weightLb = recompWeightLb(profile);
  if (!weightLb) {
    return {
      id: crypto.randomUUID(),
      title: "Body Recomp Setup Needed",
      createdAt: new Date().toISOString(),
      profile,
      summary: "Enter bodyweight so the plan can estimate calories, protein, portions, and weekly rate of loss.",
      metrics: [],
      notes: ["This is a general fitness tool, not medical advice."],
      nutrition: [],
      training: [],
      adjustments: [],
    };
  }

  const maintenance = estimateMaintenanceCalories(profile, weightLb);
  const weeklyLossPct = targetWeeklyLossPct(profile);
  const targetWeight = positiveNumber(profile.targetWeight);
  const timelineWeeks = Number(profile.timeline);
  const desiredLossLb = targetWeight ? Math.max(0, weightLb - toLb(targetWeight, profile.unit)) : weightLb * (weeklyLossPct / 100) * timelineWeeks;
  const timelineLossPerWeek = desiredLossLb ? desiredLossLb / timelineWeeks : weightLb * (weeklyLossPct / 100);
  const safeLossPerWeek = Math.min(timelineLossPerWeek, weightLb * 0.012);
  const dailyDeficit = Math.round((safeLossPerWeek * 3500) / 7);
  const calorieTarget = Math.max(recompCalorieFloor(profile), Math.round((maintenance - dailyDeficit) / 25) * 25);
  const protein = proteinTarget(profile, weightLb);
  const steps = stepTarget(profile);
  const mode = recompMode(profile);
  const nutrition = profile.tracking === "no"
    ? noTrackingNutrition(profile, weightLb, protein, steps)
    : trackedNutrition(profile, maintenance, calorieTarget, protein, steps);

  return {
    id: crypto.randomUUID(),
    title: `${mode} Plan`,
    createdAt: new Date().toISOString(),
    profile,
    summary: recompSummary(profile, mode),
    metrics: [
      ["Estimated maintenance", `${maintenance} kcal/day`],
      ["Suggested target", profile.tracking === "no" ? "No calorie target required" : `${calorieTarget} kcal/day`],
      ["Weekly loss pace", `${safeLossPerWeek.toFixed(1)} lb/week`],
      ["Protein target", `${protein.low}-${protein.high} g/day`],
      ["Steps target", `${steps.toLocaleString()} / day`],
      ["Timeline", `${timelineWeeks} weeks`],
    ],
    notes: recompNotes(profile, desiredLossLb, safeLossPerWeek),
    nutrition,
    training: recompActivityPlan(profile),
    adjustments: recompAdjustments(profile),
  };
}

function recompMode(profile) {
  if (profile.fatLossPriority >= 7 && profile.muscleGainPriority <= 3) return "Fat Loss First";
  if (profile.fatLossPriority >= 6 && profile.muscleGainPriority >= 6) return "Body Recomp";
  if (profile.muscleGainPriority >= 7) return "Lean Muscle Recomp";
  return "Sustainable Fat Loss";
}

function recompSummary(profile, mode) {
  if (profile.tracking === "no") return `${mode}: built around protein anchors, portion control, steps, and weekly feedback without counting calories.`;
  if (profile.tracking === "flexible") return `${mode}: uses rough calorie/protein ranges plus simple habit guardrails.`;
  return `${mode}: uses calorie and protein targets with weekly adjustments.`;
}

function positiveNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function toLb(value, unit) {
  return unit === "kg" ? value * 2.20462 : value;
}

function recompWeightLb(profile) {
  const weight = positiveNumber(profile.bodyweight);
  return weight ? toLb(weight, profile.unit) : 0;
}

function estimateMaintenanceCalories(profile, weightLb) {
  const activityFallback = { sedentary: 11, light: 13, moderate: 15, high: 17 };
  const height = positiveNumber(profile.height);
  const age = positiveNumber(profile.age);
  const sex = profile.sex;
  const kg = weightLb / 2.20462;
  const cm = profile.unit === "kg" ? height : height * 2.54;
  const multipliers = { sedentary: 1.2, light: 1.375, moderate: 1.55, high: 1.725 };

  if (height && age && (sex === "male" || sex === "female")) {
    const bmr = sex === "male" ? 10 * kg + 6.25 * cm - 5 * age + 5 : 10 * kg + 6.25 * cm - 5 * age - 161;
    return Math.round((bmr * multipliers[profile.activity]) / 25) * 25;
  }
  return Math.round((weightLb * activityFallback[profile.activity]) / 25) * 25;
}

function targetWeeklyLossPct(profile) {
  let pct = 0.35 + profile.deficitAggression * 0.055 + profile.fatLossPriority * 0.035 - profile.muscleGainPriority * 0.035 + profile.hungerTolerance * 0.02;
  if (profile.tracking === "no") pct -= 0.08;
  if (profile.muscleGainPriority >= 8) pct = Math.min(pct, 0.55);
  if (profile.fatLossPriority >= 8 && profile.muscleGainPriority <= 3) pct += 0.12;
  return Math.max(0.25, Math.min(1.1, pct));
}

function recompCalorieFloor(profile) {
  if (profile.sex === "male") return 1500;
  if (profile.sex === "female") return 1200;
  return 1350;
}

function proteinTarget(profile, weightLb) {
  const base = profile.muscleGainPriority >= 7 || profile.proteinConsistency >= 7 ? 0.9 : 0.75;
  const low = Math.round((weightLb * base) / 5) * 5;
  const high = Math.round((weightLb * Math.min(1.05, base + 0.15)) / 5) * 5;
  return { low, high };
}

function stepTarget(profile) {
  const current = positiveNumber(profile.steps) || 6500;
  const add = profile.cardioWillingness >= 8 ? 3000 : profile.cardioWillingness >= 5 ? 2000 : 1000;
  return Math.min(13000, Math.round((current + add) / 500) * 500);
}

function trackedNutrition(profile, maintenance, calorieTarget, protein, steps) {
  const deficit = maintenance - calorieTarget;
  const fatLossOnly = profile.fatLossPriority >= 7 && profile.muscleGainPriority <= 3;
  return [
    `Calories: start around ${calorieTarget} kcal/day (${deficit} kcal below estimated maintenance).`,
    `Protein: ${protein.low}-${protein.high} g/day. Put protein in every meal before optimizing anything else.`,
    `Fat/carbs: keep fats at a sane minimum, then use carbs around training so performance does not collapse.`,
    `Steps: average ${steps.toLocaleString()} per day before adding hard conditioning.`,
    fatLossOnly ? "Lift to maintain muscle and strength. Do not chase huge PRs while pushing the deficit." : "Lift with progression intent. Keep 1-3 reps in reserve on most work and protect performance.",
  ];
}

function noTrackingNutrition(profile, weightLb, protein, steps) {
  const meals = Number(profile.meals);
  const palms = Math.max(1, Math.round((protein.low / meals / 30) * 2) / 2);
  const carbs = profile.fatLossPriority >= 8 && profile.muscleGainPriority <= 4 ? "1 cupped handful around training, 0-1 away from training" : "1-2 cupped handfuls, biased around training";
  const fats = profile.deficitAggression >= 7 ? "1 thumb per meal" : "1-2 thumbs per meal";
  return [
    `No calorie counting: eat ${meals} repeatable meals with about ${palms} palm(s) of lean protein each.`,
    `Plate template: 1/2 plate vegetables or fruit, 1/4 plate protein, 1/4 plate carbs on training meals.`,
    `Carbs: ${carbs}.`,
    `Fats: ${fats}. Use fewer liquid calories and fewer handful foods first.`,
    `Steps: average ${steps.toLocaleString()} per day. This is the main non-tracking fat-loss lever.`,
    "Use a 10-minute pause before seconds. If still hungry, add lean protein or high-volume produce first.",
  ];
}

function recompActivityPlan(profile) {
  const cardio = profile.cardioWillingness >= 7 ? "2-4 easy zone-2 sessions of 20-35 minutes" : profile.cardioWillingness >= 4 ? "1-2 easy zone-2 sessions or longer walks" : "walking only unless recovery is excellent";
  const eatingOut = Number(profile.eatingOut || 0);
  return [
    "Use the Generator section for muscle-building workouts. This section only manages diet, steps, and fat-loss behavior.",
    `Conditioning: ${cardio}.`,
    eatingOut >= 3 ? "Eating out is a major lever: choose lean protein first, skip liquid calories, and box half of starch/fat-heavy meals before eating." : "Keep restaurant meals simple: protein first, vegetables/fruit second, sauces and fried sides optional rather than default.",
    "Keep sleep and meal timing consistent enough that hunger does not drive late-night compensation.",
    "If training performance from the Generator crashes, reduce deficit pressure before adding more cardio.",
  ];
}

function recompAdjustments(profile) {
  if (profile.tracking === "no") {
    return [
      "Weigh 3-4 mornings per week and compare weekly averages. Do not react to one day.",
      "If average weight is flat for 2 weeks: remove one carb/fat portion from two meals OR add 1500-2000 daily steps.",
      "If losing faster than 1% bodyweight/week and performance feels worse: add one carb portion to training meals.",
      "If weekends erase progress: pre-plan first meal, protein snack, and a no-liquid-calorie rule before social meals.",
    ];
  }
  return [
    "Track weekly average weight. If flat for 2 weeks, reduce 100-150 kcal/day or add 1500 daily steps.",
    "If losing faster than 1% bodyweight/week, add 100-200 kcal/day unless pure fat loss is the only goal.",
    "If gym performance drops hard, move more carbs near training before lowering volume.",
    "Every 4-6 weeks, spend 5-7 days near maintenance if hunger, sleep, or training quality gets ugly.",
  ];
}

function recompNotes(profile, desiredLossLb, safeLossPerWeek) {
  const notes = ["This is general fitness guidance, not medical advice."];
  if (desiredLossLb && desiredLossLb / Number(profile.timeline) > safeLossPerWeek) notes.push("Your target/timeline asks for faster loss than the app recommends, so the plan caps the weekly pace.");
  if (profile.tracking === "no") notes.push("No-tracking mode uses portions, protein anchors, steps, and weekly averages instead of calorie math.");
  if (profile.weekendConsistency <= 4) notes.push("Weekend consistency is a likely bottleneck. The plan uses guardrails instead of relying on willpower.");
  if (profile.muscleGainPriority >= 7) notes.push("Muscle-gain priority is high: the plan uses a slower deficit and protects lifting performance.");
  return notes;
}

function renderRecompPlan() {
  const container = document.getElementById("recompResult");
  const plan = state.currentRecompPlan;
  if (!plan) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `
    <article class="result-card">
      <div class="section-head">
        <div>
          <h2>${plan.title}</h2>
          <p>${plan.summary}</p>
        </div>
      </div>
      <div class="meta-strip">
        ${plan.metrics.map(([label, value]) => `<span class="pill">${label}: ${value}</span>`).join("")}
      </div>
      ${plan.notes.map((note) => `<p class="note">${note}</p>`).join("")}
      <div class="card-actions">
        <button class="primary" id="saveRecompPlanBtn">Save Plan</button>
      </div>
    </article>
    <div class="grid two">
      ${renderPlanCard("Nutrition", plan.nutrition)}
      ${renderPlanCard("Activity + Food Environment", plan.training)}
    </div>
    ${renderPlanCard("Weekly Adjustment Rules", plan.adjustments)}
  `;
  document.getElementById("saveRecompPlanBtn")?.addEventListener("click", saveCurrentRecompPlan);
}

function renderPlanCard(title, items) {
  return `
    <section class="card">
      <h3>${title}</h3>
      <ul class="clean-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `;
}

function saveCurrentRecompPlan() {
  if (!state.currentRecompPlan) return;
  const name = prompt("Recomp plan name", state.currentRecompPlan.title);
  if (!name) return;
  state.savedRecompPlans.unshift({
    ...state.currentRecompPlan,
    id: crypto.randomUUID(),
    name,
    dateCreated: new Date().toISOString(),
  });
  saveState();
  renderSavedRecompPlans();
  alert("Recomp plan saved.");
}

function renderSavedRecompPlans() {
  const list = document.getElementById("savedRecompPlans");
  if (!state.savedRecompPlans.length) {
    list.className = "stack empty-state";
    list.textContent = "No recomp plans saved yet.";
    return;
  }
  list.className = "stack";
  list.innerHTML = state.savedRecompPlans.map((plan) => `
    <article class="list-item">
      <h3>${plan.name}</h3>
      <p>${new Date(plan.dateCreated).toLocaleString()} - ${plan.title}</p>
      <div class="card-actions">
        <button class="primary" data-load-recomp="${plan.id}">Load</button>
        <button class="small-button danger" data-delete-recomp="${plan.id}">Delete</button>
      </div>
    </article>
  `).join("");
  list.querySelectorAll("[data-load-recomp]").forEach((button) => button.addEventListener("click", () => loadRecompPlan(button.dataset.loadRecomp)));
  list.querySelectorAll("[data-delete-recomp]").forEach((button) => button.addEventListener("click", () => deleteRecompPlan(button.dataset.deleteRecomp)));
}

function loadRecompPlan(id) {
  const plan = state.savedRecompPlans.find((item) => item.id === id);
  if (!plan) return;
  state.currentRecompPlan = structuredClone(plan);
  state.recompProfile = { ...defaultRecompProfile, ...(plan.profile || {}) };
  saveState();
  hydrateRecompProfile();
  renderRecompPlan();
}

function deleteRecompPlan(id) {
  state.savedRecompPlans = state.savedRecompPlans.filter((item) => item.id !== id);
  saveState();
  renderSavedRecompPlans();
}

function renderWorkout() {
  const container = document.getElementById("workoutResult");
  const workout = state.currentWorkout;
  if (!workout) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `
    <article class="result-card">
      <div class="section-head">
        <div>
          <h2>${workout.title}</h2>
          <p>${workout.explanation}</p>
        </div>
      </div>
      <div class="meta-strip">
        <span class="pill good">${workout.estimatedDuration} min</span>
        <span class="pill">${workout.selectedMuscles.length} muscles</span>
        <span class="pill">${workout.equipment.length} equipment options</span>
        <span class="pill ${workout.readiness.pain === "moderate" ? "danger" : workout.readiness.pain === "mild" ? "warn" : ""}">Pain: ${workout.readiness.pain}</span>
      </div>
      ${workout.notes.map((note) => `<p class="note">${note}</p>`).join("")}
      <div class="card-actions">
        <button class="primary" id="saveRoutineBtn">Save Routine</button>
        <button class="ghost" id="logCurrentBtn">Log This</button>
      </div>
    </article>
    <div class="stack">
      ${workout.exercises.map(renderExerciseCard).join("")}
    </div>
  `;
  document.getElementById("saveRoutineBtn")?.addEventListener("click", saveCurrentRoutine);
  document.getElementById("logCurrentBtn")?.addEventListener("click", () => {
    showTab("log");
    renderLog();
  });
}

function renderExerciseCard(item) {
  return `
    <article class="exercise-card">
      <div class="exercise-top">
        <div class="exercise-title">
          <span class="exercise-index">${item.order}</span>
          <div>
            <h3>${item.exercise.name}</h3>
            <small class="muted">${item.targetMuscle} - ${item.goal}</small>
          </div>
        </div>
        <div class="exercise-actions">
          <button class="small-button" data-reroll="${item.id}">Reroll</button>
          <button class="small-button" data-regress="${item.id}">Regress</button>
          <button class="small-button" data-reset-exercise="${item.id}">Reset</button>
        </div>
      </div>
      <div class="spec-grid">
        <div class="spec"><span>Sets</span><strong>${item.sets}</strong></div>
        <div class="spec"><span>Reps / time</span><strong>${item.reps}</strong></div>
        <div class="spec"><span>Rest</span><strong>${item.rest}</strong></div>
        <div class="spec"><span>RIR</span><strong>${item.rir}</strong></div>
        <div class="spec"><span>Eccentric</span><strong>${item.eccentric || tempoForExercise(item.exercise, item.goal).eccentric}</strong></div>
        <div class="spec"><span>Concentric</span><strong>${item.concentric || tempoForExercise(item.exercise, item.goal).concentric}</strong></div>
      </div>
      <p><strong>Cue:</strong> ${item.exercise.cue}</p>
      <p><strong>Why:</strong> ${item.why}</p>
      ${item.tradeoff ? `<p class="note">${item.tradeoff}</p>` : ""}
    </article>
  `;
}

function rerollExercise(planId) {
  const workout = state.currentWorkout;
  const current = workout.exercises.find((item) => item.id === planId);
  if (!current) return;
  const usedIds = new Set(workout.exercises.filter((item) => item.id !== planId).map((item) => item.exercise.id));
  const patternCounts = {};
  workout.exercises.filter((item) => item.id !== planId).forEach((item) => {
    patternCounts[item.exercise.pattern] = (patternCounts[item.exercise.pattern] || 0) + 1;
  });
  const candidates = EXERCISES.filter((exercise) => isAvailable(exercise) && !state.blocked.includes(exercise.id) && !usedIds.has(exercise.id))
    .filter((exercise) => exercise.id !== current.exercise.id)
    .filter((exercise) => exercise.primary.includes(current.targetMuscle) || exercise.secondary.includes(current.targetMuscle))
    .map((exercise) => {
      let score = scoreExercise(exercise, current.targetMuscle, current.goal, patternCounts);
      if (exercise.pattern === current.exercise.pattern) score += 8;
      if (exercise.primary.includes(current.targetMuscle)) score += 5;
      return { exercise, score };
    })
    .sort((a, b) => b.score - a.score);

  if (!candidates.length) {
    current.tradeoff = `No substitute is available for ${current.exercise.name} with the current equipment, blocked list, and no-duplicates rule.`;
    saveState();
    renderWorkout();
    return;
  }

  const replacement = planExercise(candidates[0].exercise, current.targetMuscle, current.goal);
  replacement.id = current.id;
  replacement.order = current.order;
  replacement.baseline = snapshotPlan(replacement);
  replacement.isRegressed = false;
  if (replacement.exercise.pattern !== current.exercise.pattern) {
    replacement.tradeoff = `Rerolled from ${current.exercise.name}. Closest substitute found: pattern changed from ${current.exercise.pattern} to ${replacement.exercise.pattern}.`;
  } else {
    replacement.tradeoff = `Rerolled from ${current.exercise.name}.`;
  }
  workout.exercises = workout.exercises.map((item) => (item.id === planId ? replacement : item));
  saveState();
  renderWorkout();
}

function regressExercise(planId) {
  const workout = state.currentWorkout;
  const current = workout?.exercises.find((item) => item.id === planId);
  if (!current) return;
  if (!current.baseline) current.baseline = snapshotPlan(current);
  const usedIds = new Set(workout.exercises.filter((item) => item.id !== planId).map((item) => item.exercise.id));
  const candidates = regressionCandidates(current, usedIds);

  if (!candidates.length) {
    current.tradeoff = `No easier regression is available for ${current.exercise.name} with the current equipment and blocked list. Try adding bands, cable machine, machines, or a related bodyweight option.`;
    saveState();
    renderWorkout();
    return;
  }

  const replacementExercise = candidates[0].exercise;
  const replacement = planExercise(replacementExercise, current.targetMuscle, current.goal);
  replacement.id = current.id;
  replacement.order = current.order;
  replacement.baseline = current.baseline;
  replacement.isRegressed = true;
  applyRegressionPrescription(replacement, current);
  replacement.tradeoff = regressionMessage(current.exercise, replacement.exercise, replacement);
  workout.exercises = workout.exercises.map((item) => (item.id === planId ? replacement : item));
  saveState();
  renderWorkout();
}

function regressionCandidates(current, usedIds) {
  const mapped = (REGRESSION_MAP[current.exercise.id] || [])
    .map((id) => EXERCISES.find((exercise) => exercise.id === id))
    .filter(Boolean);
  const pool = [
    ...mapped,
    ...EXERCISES.filter((exercise) => {
      const sameMuscle = exercise.primary.includes(current.targetMuscle) || exercise.secondary.includes(current.targetMuscle);
      const easier = exercise.difficulty < current.exercise.difficulty || exercise.fatigue < current.exercise.fatigue || exercise.jointStress < current.exercise.jointStress;
      return sameMuscle && easier;
    }),
  ];
  const seen = new Set();
  return pool
    .filter((exercise) => {
      if (seen.has(exercise.id)) return false;
      seen.add(exercise.id);
      return exercise.id !== current.exercise.id && !usedIds.has(exercise.id) && isAvailable(exercise) && !state.blocked.includes(exercise.id);
    })
    .map((exercise) => {
      let score = 0;
      const mappedIndex = (REGRESSION_MAP[current.exercise.id] || []).indexOf(exercise.id);
      if (mappedIndex >= 0) score += 60 - mappedIndex * 8;
      if (exercise.pattern === current.exercise.pattern) score += 12;
      if (exercise.primary.includes(current.targetMuscle)) score += 8;
      score += Math.max(0, current.exercise.difficulty - exercise.difficulty) * 4;
      score += Math.max(0, current.exercise.fatigue - exercise.fatigue) * 2;
      score += Math.max(0, current.exercise.jointStress - exercise.jointStress) * 2;
      return { exercise, score };
    })
    .sort((a, b) => b.score - a.score);
}

function applyRegressionPrescription(item, previous) {
  item.sets = Math.max(1, Math.min(previous.sets || item.sets, item.exercise.id === "pull-up-negative" ? 3 : item.sets));
  item.rir = "3-4";
  item.rest = previous.rest?.includes("3") ? "2-3 min" : lengthenRest(previous.rest || item.rest);

  if (item.exercise.id === "pull-up-negative") {
    item.sets = Math.min(3, Math.max(2, previous.sets || 2));
    item.reps = "2-4 reps";
    item.eccentric = "5 sec";
    item.concentric = "Step/jump assist";
    item.rir = "3-5";
    return;
  }
  if (item.exercise.id === "band-assisted-pull-up") {
    item.reps = "4-8 assisted";
    item.eccentric = "3 sec";
    item.concentric = "Smooth";
    return;
  }
  if (item.exercise.id === "lat-pulldown") {
    item.reps = "6-10 light";
    item.eccentric = "3 sec";
    item.concentric = "Smooth pull";
    return;
  }
  if (item.exercise.id === "scapular-pull-up") {
    item.reps = "5-8 clean reps";
    item.eccentric = "2 sec lower";
    item.concentric = "Controlled shrug-down";
    return;
  }

  if (!String(item.reps).includes("sec")) item.reps = regressionRepTarget(item.goal, item.exercise);
  item.eccentric = item.eccentric || "3-5 sec";
  item.concentric = item.concentric || "Smooth";
}

function regressionRepTarget(goal, exercise) {
  if (goal === "Strength") return exercise.defaultReps.includes("sec") ? exercise.defaultReps : "3-6 easier reps";
  if (goal === "Hypertrophy") return "6-12 controlled";
  if (goal === "Strength + Hypertrophy") return "5-8 controlled";
  if (goal === "Low-hypertrophy strength") return "3-6 controlled";
  return exercise.defaultReps;
}

function regressionMessage(fromExercise, toExercise, item) {
  const samePattern = fromExercise.pattern === toExercise.pattern;
  return `Regressed from ${fromExercise.name} to ${toExercise.name}. ${samePattern ? "Same movement role" : `Pattern changed from ${fromExercise.pattern} to ${toExercise.pattern}`} with easier loading, higher RIR, and ${item.eccentric} eccentric speed.`;
}

function resetExercise(planId) {
  const workout = state.currentWorkout;
  const current = workout?.exercises.find((item) => item.id === planId);
  if (!current) return;
  const baseline = current.baseline || snapshotPlan(current);
  const restored = applyPlanSnapshot(current, baseline);
  restored.tradeoff = `Reset to ${restored.exercise.name}.`;
  workout.exercises = workout.exercises.map((item) => (item.id === planId ? restored : item));
  saveState();
  renderWorkout();
}

function saveCurrentRoutine() {
  if (!state.currentWorkout || !state.currentWorkout.exercises.length) return;
  const name = prompt("Routine name", state.currentWorkout.title);
  if (!name) return;
  const routine = {
    ...state.currentWorkout,
    id: crypto.randomUUID(),
    name,
    dateCreated: new Date().toISOString(),
    notes: "",
  };
  state.savedRoutines.unshift(routine);
  saveState();
  renderSaved();
  alert("Routine saved.");
}

function renderSaved() {
  const list = document.getElementById("savedList");
  if (!state.savedRoutines.length) {
    list.className = "stack empty-state";
    list.textContent = "No saved routines yet.";
    return;
  }
  list.className = "stack";
  list.innerHTML = state.savedRoutines
    .map((routine) => `
      <article class="list-item">
        <div class="section-head">
          <div>
            <h3>${routine.name}</h3>
            <p>${new Date(routine.dateCreated).toLocaleString()} - ${routine.exercises.length} exercises</p>
          </div>
        </div>
        <div class="card-actions">
          <button class="primary" data-load="${routine.id}">Load</button>
          <button class="ghost" data-log="${routine.id}">Log</button>
          <button class="small-button danger" data-delete="${routine.id}">Delete</button>
        </div>
      </article>
    `)
    .join("");
  list.querySelectorAll("[data-load]").forEach((button) => button.addEventListener("click", () => loadRoutine(button.dataset.load)));
  list.querySelectorAll("[data-log]").forEach((button) => button.addEventListener("click", () => {
    loadRoutine(button.dataset.log);
    showTab("log");
  }));
  list.querySelectorAll("[data-delete]").forEach((button) => button.addEventListener("click", () => deleteRoutine(button.dataset.delete)));
}

function loadRoutine(id) {
  const routine = state.savedRoutines.find((item) => item.id === id);
  if (!routine) return;
  state.currentWorkout = structuredClone(routine);
  state.selectedMuscles = [...routine.selectedMuscles];
  state.selectedEquipment = [...routine.equipment];
  state.muscleGoals = { ...routine.goals };
  state.readiness = { ...routine.readiness };
  state.profile = { ...defaultState.profile, ...(routine.profile || {}) };
  state.calisthenics = { ...defaultState.calisthenics, ...(routine.calisthenics || {}) };
  saveState();
  hydrateReadiness();
  hydrateCalisthenics();
  hydrateProfile();
  renderAll();
  showTab("generator");
}

function deleteRoutine(id) {
  state.savedRoutines = state.savedRoutines.filter((item) => item.id !== id);
  saveState();
  renderSaved();
}

function renderLog() {
  const composer = document.getElementById("logComposer");
  const workout = state.currentWorkout;
  if (!workout || !workout.exercises.length) {
    composer.className = "stack empty-state";
    composer.textContent = "Generate or load a routine to log it.";
  } else {
    composer.className = "card";
    composer.innerHTML = `
      <h3>Log: ${workout.title}</h3>
      <div class="log-grid">
        ${workout.exercises.map((item) => `
          <div class="log-row" data-log-row="${item.id}">
            <strong>${item.exercise.name}</strong>
            <input type="number" min="0" placeholder="Sets" data-field="sets" value="${item.sets}" />
            <input type="text" placeholder="Reps" data-field="reps" />
            <input type="text" placeholder="Weight" data-field="weight" />
            <input type="text" placeholder="RIR/RPE + notes" data-field="notes" />
          </div>
        `).join("")}
      </div>
      <label>
        Session notes
        <textarea id="sessionNotes" rows="3" placeholder="How did it feel?"></textarea>
      </label>
      <button class="primary" id="saveLogBtn">Save Log</button>
    `;
    document.getElementById("saveLogBtn").addEventListener("click", saveLog);
  }

  const list = document.getElementById("logList");
  if (!state.logs.length) {
    list.className = "stack empty-state";
    list.textContent = "No logs yet.";
    return;
  }
  list.className = "stack";
  list.innerHTML = state.logs.slice(0, 8).map((log) => `
    <article class="list-item">
      <h3>${log.title}</h3>
      <p>${new Date(log.date).toLocaleString()} - ${log.entries.length} exercises</p>
      ${log.notes ? `<p>${log.notes}</p>` : ""}
    </article>
  `).join("");
}

function saveLog() {
  const workout = state.currentWorkout;
  const entries = [...document.querySelectorAll("[data-log-row]")].map((row) => {
    const exercise = workout.exercises.find((item) => item.id === row.dataset.logRow);
    const get = (field) => row.querySelector(`[data-field="${field}"]`).value;
    return {
      exerciseId: exercise.exercise.id,
      name: exercise.exercise.name,
      primary: exercise.exercise.primary,
      secondary: exercise.exercise.secondary,
      targetMuscle: exercise.targetMuscle,
      goal: exercise.goal,
      sets: Number(get("sets") || 0),
      reps: get("reps"),
      weight: get("weight"),
      notes: get("notes"),
    };
  });
  state.logs.unshift({
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    title: workout.title,
    selectedMuscles: workout.selectedMuscles,
    goals: workout.goals,
    entries,
    notes: document.getElementById("sessionNotes").value,
  });
  saveState();
  renderAll();
  alert("Workout logged.");
}

function renderProgress() {
  const view = document.getElementById("progressView");
  const total = state.logs.length;
  const recent = state.logs.slice(0, 5);
  const muscleSets = {};
  const exerciseUses = {};
  const weekStart = Date.now() - 7 * 24 * 60 * 60 * 1000;
  state.logs.filter((log) => new Date(log.date).getTime() >= weekStart).forEach((log) => {
    log.entries.forEach((entry) => {
      exerciseUses[entry.name] = (exerciseUses[entry.name] || 0) + 1;
      entry.primary.concat(entry.secondary || []).forEach((muscle) => {
        muscleSets[muscle] = (muscleSets[muscle] || 0) + Number(entry.sets || 0);
      });
    });
  });
  const maxSets = Math.max(1, ...Object.values(muscleSets));
  const muscles = Object.entries(muscleSets).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const exercises = Object.entries(exerciseUses).sort((a, b) => b[1] - a[1]).slice(0, 8);
  view.innerHTML = `
    <div class="grid two">
      <section class="card">
        <h3>Total workouts logged</h3>
        <h2>${total}</h2>
      </section>
      <section class="card">
        <h3>Recent workouts</h3>
        ${recent.length ? recent.map((log) => `<p>${new Date(log.date).toLocaleDateString()} - ${log.title}</p>`).join("") : `<p class="empty-state">No logs yet.</p>`}
      </section>
    </div>
    <section class="card">
      <h3>Estimated weekly set volume by muscle</h3>
      ${muscles.length ? muscles.map(([muscle, sets]) => `
        <div class="stat-row"><span>${muscle}</span><strong>${sets} sets</strong></div>
        <div class="bar"><span style="width:${Math.round((sets / maxSets) * 100)}%"></span></div>
      `).join("") : `<p class="empty-state">Log workouts to see volume.</p>`}
    </section>
    <div class="grid two">
      <section class="card">
        <h3>Most trained muscles</h3>
        ${muscles.length ? muscles.slice(0, 6).map(([muscle, sets]) => `<p>${muscle}: ${sets} sets</p>`).join("") : `<p class="empty-state">No muscle data yet.</p>`}
      </section>
      <section class="card">
        <h3>Recent exercises used</h3>
        ${exercises.length ? exercises.map(([name, count]) => `<p>${name}: ${count}x</p>`).join("") : `<p class="empty-state">No exercise data yet.</p>`}
      </section>
    </div>
    <section class="card">
      <h3>Recent notes</h3>
      ${state.logs.filter((log) => log.notes).slice(0, 5).map((log) => `<p>${new Date(log.date).toLocaleDateString()}: ${log.notes}</p>`).join("") || `<p class="empty-state">No notes yet.</p>`}
    </section>
  `;
}

function renderPreferences() {
  const query = document.getElementById("exerciseSearch").value.trim().toLowerCase();
  const list = document.getElementById("exercisePreferenceList");
  const filtered = EXERCISES.filter((exercise) => !query || exercise.name.toLowerCase().includes(query) || exercise.primary.join(" ").toLowerCase().includes(query));
  list.innerHTML = filtered.map((exercise) => `
    <div class="preference-row">
      <div>
        <strong>${exercise.name}</strong>
        <p>${exercise.primary.join(", ")} - ${exercise.equipment.join(", ")}</p>
      </div>
      <div class="preference-buttons">
        <button class="small-button ${state.favorites.includes(exercise.id) ? "active" : ""}" data-fav="${exercise.id}">Favorite</button>
        <button class="small-button danger ${state.blocked.includes(exercise.id) ? "active" : ""}" data-block="${exercise.id}">Block</button>
      </div>
    </div>
  `).join("");
  list.querySelectorAll("[data-fav]").forEach((button) => button.addEventListener("click", () => togglePreference("favorites", button.dataset.fav)));
  list.querySelectorAll("[data-block]").forEach((button) => button.addEventListener("click", () => togglePreference("blocked", button.dataset.block)));
  renderPreferenceSummary();
}

function togglePreference(type, id) {
  state[type] = state[type].includes(id) ? state[type].filter((item) => item !== id) : [...state[type], id];
  if (type === "blocked") state.favorites = state.favorites.filter((item) => item !== id);
  if (type === "favorites") state.blocked = state.blocked.filter((item) => item !== id);
  saveState();
  renderPreferences();
}

function renderPreferenceSummary() {
  const render = (ids) => ids.map((id) => EXERCISES.find((exercise) => exercise.id === id)).filter(Boolean)
    .map((exercise) => `<div class="list-item">${exercise.name}<button class="small-button" data-remove-pref="${exercise.id}">Remove</button></div>`).join("");
  const favoriteList = document.getElementById("favoriteList");
  const blockedList = document.getElementById("blockedList");
  favoriteList.className = state.favorites.length ? "stack" : "stack empty-state";
  blockedList.className = state.blocked.length ? "stack" : "stack empty-state";
  favoriteList.innerHTML = state.favorites.length ? render(state.favorites) : "No favorites yet.";
  blockedList.innerHTML = state.blocked.length ? render(state.blocked) : "No blocked exercises.";
  document.querySelectorAll("[data-remove-pref]").forEach((button) => button.addEventListener("click", () => {
    state.favorites = state.favorites.filter((id) => id !== button.dataset.removePref);
    state.blocked = state.blocked.filter((id) => id !== button.dataset.removePref);
    saveState();
    renderPreferences();
  }));
}

function showTab(id) {
  document.querySelector(`.tab[data-tab="${id}"]`)?.click();
}

function renderAll() {
  hydrateReadiness();
  hydrateProfile();
  hydrateJumpProfile();
  hydrateRecompProfile();
  renderPickers();
  renderJumpPickers();
  renderGoalEditor();
  renderWorkout();
  renderJumpBlock();
  renderRecompPlan();
  renderSavedJumpBlocks();
  renderSavedRecompPlans();
  renderSaved();
  renderLog();
  renderProgress();
  renderPreferences();
}

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}

init();
