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

const BEGINNER_SLIDERS = [
  ["muscleGrowth", "Muscle growth", "Higher values add more hypertrophy volume and simple progression."],
  ["fatLoss", "Fat loss", "Higher values add more steps, conditioning, and density without making lifting random."],
  ["strengthGain", "Strength gain", "Higher values add heavier-feeling compound work, longer rests, and rep quality."],
  ["aesthetics", "Aesthetics", "Higher values bias upper chest, lats, side delts, glutes, and arms."],
];

const BEGINNER_EQUIPMENT = ["Bodyweight", "Pull-up bar", "Free-weights", "Machines", "Cable machine"];

const BEGINNER_PHYSIQUE_PRIORITIES = [
  ["biggerChest", "Bigger chest"],
  ["absSummer", "Abs for summer"],
  ["vTaper", "V-taper"],
  ["biggerArms", "Bigger arms"],
  ["widerShoulders", "Wider shoulders"],
  ["biggerGlutes", "Bigger glutes"],
  ["athleticLegs", "Athletic legs"],
  ["leanerWaist", "Leaner waist"],
];

const defaultBeginnerProfile = {
  muscleGrowth: 6,
  fatLoss: 4,
  strengthGain: 5,
  aesthetics: 5,
  equipment: ["Bodyweight", "Free-weights"],
  usePhysiquePriorities: false,
  physiquePriorities: [],
  sessions: "3",
  length: "35",
  confidence: "medium",
  days: "flexible",
  gender: "unspecified",
  bodyFocus: "both",
};

const POSTURE_SLIDERS = [
  ["forwardShoulder", "Forward shoulder lean", "Shoulders sit forward, upper traps dominate, or chest feels tight."],
  ["anteriorPelvicTilt", "Anterior pelvic tilt", "Ribs flare, low back arches, or hip flexors feel constantly tight."],
  ["kneeTracking", "Knee tracking", "Knees cave, wobble, or miss the toe line on squats, stairs, or landings."],
  ["quadDominance", "Quad dominance", "Quads take over while glutes/hamstrings feel hard to access."],
  ["thoracicMobility", "Stiff upper back", "Hard to extend or rotate through the upper back."],
  ["ankleMobility", "Limited ankle mobility", "Heels lift, knees cannot travel, or calves feel restrictive."],
  ["hipStability", "Hip stability", "Pelvis shifts, hips drop, or single-leg control feels uneven."],
  ["scapularControl", "Scapular control", "Hard to set shoulder blades without shrugging or winging."],
];

const POSTURE_EQUIPMENT = ["Bodyweight", "Bands", "Dumbbells", "Bench", "Cable machine", "Machines", "Pull-up bar"];

const defaultPostureProfile = {
  forwardShoulder: 4,
  anteriorPelvicTilt: 4,
  kneeTracking: 4,
  quadDominance: 4,
  thoracicMobility: 4,
  ankleMobility: 4,
  hipStability: 4,
  scapularControl: 4,
  equipment: ["Bodyweight", "Bands"],
  desk: "medium",
  training: "general",
  pain: "none",
  time: "12",
};

const CALISTHENICS_GOALS = [
  ["pullUp", "Pull-up strength"],
  ["dip", "Dip strength"],
  ["pushUp", "Push-up mastery"],
  ["handstand", "Handstand"],
  ["lSit", "L-sit / compression"],
  ["frontLever", "Front lever"],
  ["planche", "Planche"],
  ["muscleUp", "Muscle-up"],
  ["pistol", "Pistol squat"],
];

const CALISTHENICS_EQUIPMENT = ["Bodyweight", "Pull-up bar", "Bands", "Parallettes", "Rings", "Dumbbells", "Bench", "Cable machine"];

const CALISTHENICS_PLAN_SLIDERS = [
  ["straightArm", "Straight-arm strength", "Planche, front lever, scapular depression, and locked-elbow control."],
  ["bentArm", "Bent-arm strength", "Pull-ups, dips, push-ups, rows, and pressing strength."],
  ["skillPractice", "Skill practice", "More low-fatigue technical holds and frequent crisp exposures."],
  ["coreCompression", "Core compression", "L-sit, hollow body, pelvic control, and active compression."],
  ["jointTolerance", "Joint tolerance", "Higher values allow harder wrists/elbows/shoulders progressions."],
  ["conditioning", "Density", "Higher values make sessions denser; lower values preserve quality and rest."],
];

const defaultCalisthenicsPlan = {
  goals: ["pullUp"],
  equipment: ["Bodyweight", "Pull-up bar", "Bands"],
  straightArm: 5,
  bentArm: 6,
  skillPractice: 6,
  coreCompression: 5,
  jointTolerance: 5,
  conditioning: 4,
  sessions: "3",
  level: "base",
};

const FLIP_GOALS = [
  ["backFlip", "Back flips"],
  ["frontFlip", "Front flips"],
  ["sideFlip", "Side flips"],
  ["twisting", "Twisting"],
  ["tucking", "Tucking strength"],
  ["landing", "Landing confidence"],
];

const FLIP_SLIDERS = [
  ["jumpPower", "Jump power", "How much the plan should build takeoff height and pop."],
  ["airAwareness", "Air awareness", "How much the plan should bias spotting, shapes, and safe progressions."],
  ["tuckSpeed", "Tuck speed", "How much the plan should train fast knees-to-chest and compact rotation."],
  ["landingControl", "Landing control", "How much the plan should bias sticks, deceleration, and quiet landings."],
  ["fearManagement", "Fear management", "How much the plan should use lower-risk progressions and confidence reps."],
];

const FLIP_EQUIPMENT = ["Open floor", "Soft mat", "Trampoline", "Foam pit", "Wedge mat", "Spotter", "Pull-up bar", "Bands"];

const defaultFlipProfile = {
  goals: ["backFlip"],
  equipment: ["Open floor", "Soft mat"],
  jumpPower: 5,
  airAwareness: 5,
  tuckSpeed: 5,
  landingControl: 6,
  fearManagement: 6,
  sessions: "2",
  level: "new",
  surface: "soft",
};

const MOBILITY_GOALS = [
  ["wristMobility", "Wrist mobility"],
  ["shoulderRom", "Shoulder ROM"],
  ["thoracicSpine", "T-spine rotation"],
  ["overheadPosition", "Overhead position"],
  ["deepSquat", "Deep squat"],
  ["ankleDorsiflexion", "Ankle dorsiflexion"],
  ["hipInternalRotation", "Hip internal rotation"],
  ["hipExternalRotation", "Hip external rotation"],
  ["hamstrings", "Hamstrings"],
  ["frontSplits", "Front splits"],
  ["middleSplits", "Middle splits"],
  ["pancake", "Pancake fold"],
  ["backbend", "Bridge / backbend"],
];

const MOBILITY_SLIDERS = [
  ["passiveFlexibility", "Passive flexibility", "Longer relaxed holds and end-range tolerance."],
  ["activeFlexibility", "Active flexibility", "Strength to lift, hold, and control the range without assistance."],
  ["jointMobility", "Joint mobility", "Controlled articular motion, end-range strength, and usable ROM."],
  ["loadedMobility", "Loaded mobility", "Squats, hinges, split squats, pulses, and strength inside the range."],
  ["dailyConsistency", "Daily consistency", "Higher values assume short frequent sessions; lower values use fewer longer sessions."],
];

const MOBILITY_EQUIPMENT = ["Bodyweight", "Bands", "Dumbbells", "Bench", "Wall", "Yoga block", "Pull-up bar"];

const defaultMobilityProfile = {
  goals: ["deepSquat"],
  equipment: ["Bodyweight", "Wall"],
  passiveFlexibility: 5,
  activeFlexibility: 5,
  jointMobility: 6,
  loadedMobility: 4,
  dailyConsistency: 6,
  time: "12",
  frequency: "4",
  intensity: "moderate",
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
  "pull-up": ["band-assisted-pull-up", "eccentric-chin-up", "pull-up-negative", "lat-pulldown", "scapular-pull-up", "band-straight-arm-pulldown"],
  "band-assisted-pull-up": ["eccentric-chin-up", "pull-up-negative", "lat-pulldown", "scapular-pull-up", "band-straight-arm-pulldown"],
  "lat-pulldown": ["half-kneeling-single-arm-pulldown", "band-assisted-pull-up", "scapular-pull-up", "band-straight-arm-pulldown"],
  "incline-barbell-press": ["incline-db-press", "low-incline-machine-press", "feet-elevated-push-up", "incline-db-squeeze-press", "incline-push-up"],
  "incline-db-press": ["low-incline-machine-press", "feet-elevated-push-up", "incline-db-squeeze-press", "incline-push-up"],
  "db-bench-press": ["machine-chest-press", "push-up", "incline-push-up"],
  "standing-overhead-press": ["landmine-press", "db-shoulder-press", "pike-push-up", "wall-handstand-line-hold"],
  "db-shoulder-press": ["landmine-press", "pike-push-up", "wall-handstand-line-hold"],
  "machine-lateral-raise": ["band-lateral-raise", "db-lateral-raise", "lean-away-cable-lateral-raise", "cable-lateral-raise", "band-face-pull"],
  "db-lateral-raise": ["band-lateral-raise", "machine-lateral-raise", "lean-away-cable-lateral-raise", "cable-lateral-raise", "band-face-pull"],
  "cable-lateral-raise": ["band-lateral-raise", "lean-away-cable-lateral-raise", "db-lateral-raise", "machine-lateral-raise", "band-face-pull"],
  "lean-away-cable-lateral-raise": ["band-lateral-raise", "cable-lateral-raise", "db-lateral-raise", "machine-lateral-raise", "band-face-pull"],
  "cable-rear-delt-fly": ["cable-face-pull", "band-face-pull", "prone-db-rear-delt-raise", "chest-supported-machine-row"],
  "prone-db-rear-delt-raise": ["band-face-pull", "cable-face-pull", "chest-supported-db-row"],
  "back-squat": ["deep-leg-press", "front-foot-elevated-split-squat", "goblet-squat", "tempo-split-squat", "box-squat-to-bench"],
  "deep-leg-press": ["goblet-squat", "box-squat-to-bench", "step-down"],
  "bulgarian-split-squat": ["front-foot-elevated-split-squat", "reverse-lunge", "step-down", "split-squat-iso-hold"],
  "barbell-romanian-deadlift": ["db-romanian-deadlift", "hamstring-curl", "back-extension", "single-leg-hip-hinge", "hamstring-slider-curl"],
  "db-romanian-deadlift": ["hamstring-curl", "back-extension", "single-leg-hip-hinge", "hamstring-slider-curl"],
  "hamstring-curl": ["hamstring-slider-curl", "single-leg-hip-hinge", "back-extension", "single-leg-glute-bridge"],
  "hamstring-slider-curl": ["hamstring-curl", "single-leg-hip-hinge", "single-leg-glute-bridge"],
  "hip-thrust": ["db-hip-thrust", "single-leg-glute-bridge", "back-extension"],
  "standing-calf-raise": ["seated-calf-raise", "single-leg-calf-raise", "calf-isometric-hold"],
  "single-leg-calf-raise": ["db-single-leg-calf-raise", "seated-calf-raise", "calf-isometric-hold", "tibialis-raise"],
  "db-single-leg-calf-raise": ["single-leg-calf-raise", "seated-calf-raise", "calf-isometric-hold", "tibialis-raise"],
  "pogo-hop": ["calf-isometric-hold", "snap-down", "standing-calf-raise"],
  "broad-jump": ["snap-down", "countermovement-jump", "skater-bound"],
  "approach-jump": ["countermovement-jump", "snap-down", "pogo-hop"],
  "diamond-push-up": ["close-grip-push-up", "cable-pushdown", "push-up"],
  "close-grip-bench-press": ["close-grip-push-up", "cable-pushdown", "db-skull-crusher"],
  "hanging-knee-raise": ["captain-chair-knee-raise", "reverse-crunch", "dead-bug"],
  "copenhagen-plank": ["side-lying-adduction", "adductor-machine", "side-plank"],
  "suitcase-carry": ["offset-farmer-carry", "pallof-press", "side-plank"],
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
  e("Band Lateral Raise", ["Side delts"], ["Upper traps"], ["Bands"], "lateral raise", ["Maintenance", "Hypertrophy"], 1, 1, 1, 1, "12-20", "45-60 sec", "2-3", "Step on the band lightly and raise only as high as you can without shrugging.", "Very easy side-delt volume and a good regression when weights feel too jumpy."),
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
  e("DB Single-Leg Calf Raise", ["Calves"], [], ["Dumbbells"], "calf raise", ["Strength", "Hypertrophy", "Athletic / parkour carryover"], 2, 1, 2, 2, "8-12 each", "75-90 sec", "1-3", "Hold support lightly and move through full range without bouncing.", "Loadable single-leg calf work when no calf machine is available."),
  e("Adductor Machine", ["Adductors"], [], ["Adductor machine"], "adduction", ["Strength", "Hypertrophy", "Athletic / parkour carryover"], 2, 1, 1, 1, "8-15", "75 sec", "1-3", "Control the outer range and squeeze inward.", "Direct adductor capacity for knee and hip control."),
  e("Copenhagen Plank", ["Adductors", "Obliques"], ["Abs"], ["Bench"], "adduction", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Strength"], 3, 2, 2, 4, "10-25 sec each", "60-90 sec", "2-3", "Keep hips tall and ribs tucked.", "Adductor and lateral trunk strength with high carryover."),
  e("Dead Bug", ["Abs"], ["Obliques"], ["Bodyweight"], "anti-extension", ["Low-hypertrophy strength", "Maintenance", "Athletic / parkour carryover"], 1, 1, 1, 1, "6-10 each", "45-60 sec", "3", "Exhale, flatten ribs, and move only as far as you control.", "Bracing practice without high abdominal hypertrophy stimulus."),
  e("Hanging Knee Raise", ["Abs"], ["Lats", "Forearms"], ["Pull-up bar"], "trunk flexion", ["Hypertrophy", "Strength"], 2, 2, 2, 3, "6-12", "75-90 sec", "1-3", "Curl the pelvis up instead of just lifting knees.", "Harder abdominal strength work with grip demand."),
  e("Pallof Press", ["Obliques", "Abs"], [], ["Cable machine"], "anti-rotation", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Maintenance"], 1, 1, 1, 1, "8-12 each", "45-60 sec", "3", "Press straight out and refuse to rotate.", "Anti-rotation strength without high oblique size stimulus."),
  e("Band Pallof Press", ["Obliques", "Abs"], [], ["Bands"], "anti-rotation", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Maintenance"], 1, 1, 1, 1, "8-12 each", "45-60 sec", "3", "Lock ribs down and pause fully extended.", "Portable anti-rotation work for trunk control."),
  e("Side Plank", ["Obliques"], ["Abs", "Glutes"], ["Bodyweight"], "anti-lateral flexion", ["Low-hypertrophy strength", "Maintenance", "Athletic / parkour carryover"], 1, 1, 1, 1, "20-45 sec each", "45-60 sec", "3", "Stack hips and push the floor away.", "Lateral trunk endurance with little hypertrophy bias."),
  e("Suitcase Carry", ["Obliques", "Forearms"], ["Abs"], ["Dumbbells"], "carry", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Strength"], 3, 1, 1, 3, "30-45 sec each", "75-90 sec", "2", "Walk tall without leaning away from the load.", "Anti-lateral-flexion strength with useful real-world carryover."),
  e("Incline Push-Up", ["Mid/lower chest"], ["Triceps", "Front delts", "Abs"], ["Bodyweight", "Bench"], "horizontal press", ["Maintenance", "Hypertrophy", "Athletic / parkour carryover"], 1, 1, 1, 1, "8-15", "60 sec", "3-4", "Keep a straight body line and use the bench height to make reps smooth.", "A reliable chest regression when standard push-ups or pressing loads are too hard."),
  e("Low Incline Machine Press", ["Upper chest"], ["Triceps", "Front delts"], ["Machines"], "upper press", ["Hypertrophy", "Strength + Hypertrophy"], 2, 1, 2, 2, "8-12", "90 sec", "1-3", "Set the seat so handles start around upper chest height and press without shrugging.", "Stable upper-chest loading with less shoulder skill and easier rerolls than barbell pressing."),
  e("High-to-Low Cable Fly", ["Mid/lower chest"], ["Front delts"], ["Cable machine"], "fly", ["Hypertrophy", "Maintenance"], 1, 1, 2, 2, "10-20", "60-75 sec", "1-3", "Hug down and in while keeping ribs stacked.", "Chest isolation that gives a lower-chest option without adding pressing fatigue."),
  e("Close-Grip Push-Up", ["Triceps"], ["Mid/lower chest", "Front delts", "Abs"], ["Bodyweight"], "horizontal press", ["Strength", "Maintenance", "Athletic / parkour carryover"], 2, 1, 2, 2, "6-15", "75 sec", "2-3", "Use a narrow but comfortable hand width and keep elbows tracking back.", "A better triceps push-up regression than forcing diamond hand placement."),
  e("Half-Kneeling Single-Arm Pulldown", ["Lats"], ["Biceps", "Abs"], ["Cable machine"], "vertical pull", ["Hypertrophy", "Strength + Hypertrophy", "Athletic / parkour carryover"], 2, 1, 2, 2, "8-12 each", "75-90 sec", "1-3", "Reach tall, lock ribs down, and pull elbow toward your front pocket.", "A lat pulldown variation with great control and trunk position feedback."),
  e("Eccentric Chin-Up", ["Lats", "Biceps"], ["Mid back", "Forearms"], ["Pull-up bar"], "vertical pull", ["Strength", "Low-hypertrophy strength"], 2, 1, 2, 3, "2-4 reps", "2 min", "3-5", "Step to the top with palms facing you, pause, and lower for five seconds.", "Often easier than pull-up negatives while still building vertical-pull strength."),
  e("Inverted Row", ["Mid back", "Lats"], ["Biceps", "Rear delts"], ["Pull-up bar"], "row", ["Strength + Hypertrophy", "Hypertrophy", "Maintenance"], 2, 1, 1, 2, "6-12", "75-90 sec", "1-3", "Keep hips tall and pull the chest to the bar.", "A bodyweight row that fills the mid-back gap when dumbbells or cables are unavailable."),
  e("Machine Row", ["Mid back"], ["Lats", "Biceps", "Rear delts"], ["Machines"], "row", ["Hypertrophy", "Strength + Hypertrophy"], 2, 1, 2, 2, "8-12", "90 sec", "1-3", "Let the shoulder blades reach forward, then pull elbows back without leaning.", "Stable rowing volume for upper-back growth with low lower-back fatigue."),
  e("Chest-Supported Machine Row", ["Mid back"], ["Lats", "Rear delts", "Biceps"], ["Machines"], "row", ["Hypertrophy", "Maintenance"], 1, 1, 2, 1, "10-15", "75-90 sec", "1-3", "Stay glued to the pad and row wide enough to feel upper back.", "Low-fatigue mid-back volume when recovery or low back is a limiter."),
  e("Cable Face Pull", ["Rear delts"], ["Mid back"], ["Cable machine"], "rear delt", ["Hypertrophy", "Maintenance", "Low-hypertrophy strength"], 1, 1, 1, 1, "12-20", "45-60 sec", "2-3", "Pull toward the eyes and rotate thumbs back without arching.", "Shoulder-friendly rear-delt work with easy loading."),
  e("Machine Lateral Raise", ["Side delts"], ["Upper traps"], ["Machines"], "lateral raise", ["Hypertrophy", "Maintenance"], 1, 1, 1, 1, "12-20", "60 sec", "1-3", "Keep shoulders down and drive the pads out, not up.", "Stable side-delt isolation that works well for high-quality hypertrophy volume."),
  e("Lean-Away Cable Lateral Raise", ["Side delts"], ["Upper traps"], ["Cable machine"], "lateral raise", ["Hypertrophy"], 1, 1, 2, 2, "10-18 each", "60 sec", "1-3", "Lean away slightly and raise in the scapular plane without yanking.", "A strong side-delt reroll with more tension in the lengthened range."),
  e("Landmine Press", ["Front delts"], ["Upper chest", "Triceps", "Abs"], ["Barbell"], "vertical press", ["Strength + Hypertrophy", "Athletic / parkour carryover", "Strength"], 2, 1, 2, 2, "6-10 each", "90 sec-2 min", "1-3", "Reach up and forward while ribs stay down.", "A shoulder-friendlier press that still builds front-delt and trunk force."),
  e("Pike Push-Up", ["Front delts"], ["Triceps", "Upper chest"], ["Bodyweight"], "vertical press", ["Strength", "Athletic / parkour carryover", "Strength + Hypertrophy"], 3, 2, 3, 3, "4-10", "90 sec-2 min", "2-3", "Push the floor away and let the head travel between the hands.", "Bodyweight vertical pressing that bridges push-ups and handstand work."),
  e("Wall Handstand Line Hold", ["Front delts"], ["Abs", "Triceps"], ["Bodyweight"], "straight arm", ["Low-hypertrophy strength", "Strength", "Athletic / parkour carryover"], 2, 2, 3, 3, "15-35 sec", "90 sec", "3-4", "Push tall through the floor and keep ribs tucked.", "Straight-arm shoulder strength with less elbow bending and useful calisthenics carryover."),
  e("Cable Curl", ["Biceps"], ["Forearms"], ["Cable machine"], "curl", ["Hypertrophy", "Maintenance"], 1, 1, 1, 1, "10-15", "60 sec", "1-3", "Keep elbows still and squeeze without shoulder drift.", "Smooth biceps tension that rerolls well from dumbbell curls."),
  e("Preacher Curl Machine", ["Biceps"], ["Forearms"], ["Machines"], "curl", ["Hypertrophy"], 1, 1, 2, 1, "8-15", "60-75 sec", "1-3", "Keep the upper arm on the pad and avoid bouncing from the bottom.", "Stable biceps volume with less cheating and easy load control."),
  e("Reverse Curl", ["Forearms"], ["Biceps"], ["Dumbbells"], "curl", ["Hypertrophy", "Low-hypertrophy strength", "Strength"], 1, 1, 1, 2, "8-15", "60 sec", "2-3", "Curl with knuckles up and wrists stacked.", "Forearm and elbow-flexor strength without needing grip implements."),
  e("Wrist Roller", ["Forearms"], [], ["Dumbbells"], "grip", ["Strength", "Hypertrophy"], 2, 1, 2, 2, "1-2 rolls", "60-90 sec", "2-3", "Roll smoothly both directions without shrugging.", "A simple forearm option when pinch holds are not the right fit."),
  e("Band Neck Flexion", ["Neck"], [], ["Bands"], "neck", ["Strength", "Maintenance"], 2, 2, 2, 2, "8-12", "60 sec", "2-3", "Move through a small pain-free range and control the return.", "Adds an anterior-neck option so neck work is not only extension or isometrics."),
  e("Neck Side Isometric", ["Neck"], [], ["Bodyweight"], "neck", ["Low-hypertrophy strength", "Maintenance"], 1, 1, 1, 1, "10-20 sec each", "45 sec", "3", "Press gently into your hand from the side without tilting.", "Low-risk lateral neck capacity with no equipment."),
  e("Front-Foot Elevated Split Squat", ["Quads", "Glutes"], ["Adductors", "Calves"], ["Dumbbells"], "single leg", ["Strength + Hypertrophy", "Athletic / parkour carryover", "Hypertrophy"], 3, 2, 3, 3, "6-10 each", "90 sec-2 min", "1-3", "Let the front knee travel while the whole foot stays heavy.", "Deep quad and hip strength with excellent unilateral carryover."),
  e("Reverse Lunge", ["Glutes", "Quads"], ["Adductors"], ["Dumbbells"], "single leg", ["Hypertrophy", "Strength + Hypertrophy", "Athletic / parkour carryover"], 3, 2, 2, 2, "8-12 each", "90 sec", "1-3", "Step back softly and pull through the front leg.", "A friendlier unilateral option than Bulgarian split squats for many knees."),
  e("Box Squat to Bench", ["Quads", "Glutes"], ["Abs"], ["Bodyweight", "Bench"], "squat", ["Maintenance", "Low-hypertrophy strength", "Hypertrophy"], 1, 1, 1, 1, "6-12", "60-75 sec", "3", "Touch the bench lightly and stand without rocking.", "A beginner and knee-friendly squat regression with clear depth control."),
  e("Tempo Split Squat", ["Quads", "Glutes"], ["Adductors"], ["Bodyweight"], "single leg", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Maintenance"], 2, 1, 1, 2, "5-8 each", "60-90 sec", "3", "Lower for three seconds, pause, and stand without bouncing.", "A low-load split-squat regression that still trains useful knee and hip control."),
  e("Split Squat Iso Hold", ["Quads", "Glutes"], ["Adductors"], ["Bodyweight"], "single leg", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Maintenance"], 1, 1, 1, 2, "15-30 sec each", "60-75 sec", "3-4", "Hold a pain-free depth with knee tracking over toes.", "Low-pump unilateral strength and tendon-friendly knee control."),
  e("DB Step-Up", ["Glutes", "Quads"], ["Adductors", "Calves"], ["Dumbbells", "Bench"], "single leg", ["Strength", "Athletic / parkour carryover", "Strength + Hypertrophy"], 3, 2, 3, 3, "5-8 each", "90 sec", "1-3", "Drive through the whole foot and avoid jumping off the back leg.", "Useful glute and single-leg force with a clear athletic role."),
  e("DB Hip Thrust", ["Glutes"], ["Hamstrings"], ["Dumbbells", "Bench"], "hinge", ["Hypertrophy", "Strength + Hypertrophy"], 2, 1, 2, 2, "8-12", "90 sec", "1-3", "Pause at the top with ribs down and pelvis tucked.", "A glute-focused hip thrust option without needing a barbell."),
  e("Single-Leg Glute Bridge", ["Glutes"], ["Hamstrings"], ["Bodyweight"], "hinge", ["Maintenance", "Low-hypertrophy strength", "Athletic / parkour carryover"], 1, 1, 1, 1, "8-12 each", "60 sec", "3", "Keep hips level and finish with the glute, not the low back.", "Simple glute regression that keeps posterior-chain work accessible."),
  e("Hamstring Slider Curl", ["Hamstrings"], ["Glutes"], ["Bodyweight"], "knee flexion", ["Hypertrophy", "Athletic / parkour carryover", "Strength"], 3, 2, 3, 3, "5-10", "90 sec", "2-3", "Bridge tall and slowly slide heels out before curling back.", "Bodyweight hamstring curl progression for knee-flexion strength when machines are unavailable."),
  e("Single-Leg Hip Hinge", ["Hamstrings", "Glutes"], ["Lower back"], ["Bodyweight"], "hinge", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Maintenance"], 1, 1, 2, 2, "6-10 each", "60-75 sec", "3", "Reach long through the back leg and keep hips square.", "Low-load posterior-chain control for regression and athletic balance."),
  e("Seated Calf Raise", ["Calves"], [], ["Machines"], "calf raise", ["Hypertrophy", "Strength", "Athletic / parkour carryover"], 2, 1, 1, 1, "10-20", "60-75 sec", "1-3", "Pause deep at the bottom and finish with the big toe heavy.", "Soleus-biased calf work that complements standing calf raises."),
  e("Calf Isometric Hold", ["Calves"], [], ["Bodyweight"], "calf raise", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Maintenance"], 1, 1, 1, 1, "20-40 sec", "45-75 sec", "3-4", "Hold mid-range with steady pressure and no Achilles pain spike.", "Tendon-friendly calf regression when jumping or loaded raises are too aggressive."),
  e("Tibialis Raise", ["Calves"], [], ["Bodyweight"], "calf raise", ["Maintenance", "Athletic / parkour carryover", "Low-hypertrophy strength"], 1, 1, 1, 1, "12-25", "45-60 sec", "3", "Lean on a wall and pull toes up without rocking.", "Balances lower-leg work and helps ankle control without high Achilles load."),
  e("Countermovement Jump", ["Quads", "Glutes", "Calves"], ["Abs"], ["Bodyweight"], "jump", ["Athletic / parkour carryover", "Strength"], 2, 1, 3, 3, "2-4 reps", "90 sec-2 min", "4", "Dip fast, jump tall, and stop before height drops.", "A simpler vertical-power option than approach jumps."),
  e("Low Box Drop Landing", ["Quads", "Glutes", "Calves"], ["Abs"], ["Bench"], "landing", ["Athletic / parkour carryover", "Low-hypertrophy strength"], 1, 1, 2, 2, "3-5 reps", "75-90 sec", "4", "Step off, land quietly, and freeze with knees tracking.", "Landing exposure that is easier to control than repeated jumps."),
  e("Side-Lying Adduction", ["Adductors"], ["Abs"], ["Bodyweight"], "adduction", ["Maintenance", "Low-hypertrophy strength", "Athletic / parkour carryover"], 1, 1, 1, 1, "10-15 each", "45-60 sec", "3", "Lift the bottom leg without rolling the hips back.", "Simple adductor regression before Copenhagen planks or machines."),
  e("Reverse Crunch", ["Abs"], ["Obliques"], ["Bodyweight"], "trunk flexion", ["Hypertrophy", "Strength", "Maintenance"], 1, 1, 1, 1, "8-15", "60 sec", "2-3", "Curl the pelvis up and lower slowly without swinging.", "A floor-based ab option when hanging raises are too hard."),
  e("Captain Chair Knee Raise", ["Abs"], ["Hip flexors"], ["Machines"], "trunk flexion", ["Hypertrophy", "Strength"], 2, 1, 2, 2, "8-15", "60-75 sec", "1-3", "Push down through the pads and curl the pelvis up.", "A more stable regression from hanging knee raises."),
  e("Hollow Body Hold", ["Abs"], ["Obliques"], ["Bodyweight"], "anti-extension", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Strength"], 1, 1, 2, 2, "15-35 sec", "45-60 sec", "3", "Press low back down and choose a lever you can own.", "High-value trunk stiffness for calisthenics, flips, and jumps."),
  e("Stir-the-Pot Plank", ["Abs", "Obliques"], [], ["Machines"], "anti-extension", ["Low-hypertrophy strength", "Athletic / parkour carryover"], 2, 1, 2, 2, "6-10 circles each", "60-75 sec", "3", "Keep hips quiet while the arms move.", "Anti-extension and anti-rotation work without chasing ab pump."),
  e("Offset Farmer Carry", ["Obliques", "Forearms"], ["Abs", "Upper traps"], ["Dumbbells"], "carry", ["Low-hypertrophy strength", "Athletic / parkour carryover", "Strength"], 3, 1, 1, 2, "30-45 sec", "75-90 sec", "2-3", "Use one heavy and one light dumbbell, then resist leaning.", "A suitcase-carry variation that gives more reroll variety while preserving the trunk role."),
];

const STORAGE_KEY = "workoutEngine.v1";

const defaultForecastSettings = {
  generatorWeeks: 8,
  recompWeeks: 12,
  beginnerWeeks: 8,
  postureWeeks: 6,
  calisthenicsWeeks: 8,
  flipWeeks: 8,
  mobilityWeeks: 6,
  jumpBaselines: {},
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const defaultUiSettings = {
  theme: "dark",
  accent: "#64d2a4",
};

const defaultScheduleSettings = {
  generator: { enabled: false, days: ["Mon", "Wed", "Fri"] },
  beginner: { enabled: false, days: ["Mon", "Wed", "Fri"] },
  posture: { enabled: false, days: ["Mon", "Tue", "Thu", "Sat"] },
  calisthenics: { enabled: false, days: ["Mon", "Wed", "Fri"] },
  flips: { enabled: false, days: ["Tue", "Sat"] },
  mobility: { enabled: false, days: ["Mon", "Tue", "Thu", "Sat"] },
  recomp: { enabled: false, days: ["Mon", "Wed", "Fri", "Sat"] },
  jump: { enabled: false, days: ["Mon", "Wed", "Sat"] },
};

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
  beginnerProfile: { ...defaultBeginnerProfile },
  postureProfile: { ...defaultPostureProfile },
  calisthenicsPlan: { ...defaultCalisthenicsPlan },
  flipProfile: { ...defaultFlipProfile },
  mobilityProfile: { ...defaultMobilityProfile },
  currentJumpBlock: null,
  currentRecompPlan: null,
  currentBeginnerPlan: null,
  currentPosturePlan: null,
  currentCalisthenicsPlan: null,
  currentFlipPlan: null,
  currentMobilityPlan: null,
  savedJumpBlocks: [],
  savedRecompPlans: [],
  favorites: [],
  blocked: [],
  savedRoutines: [],
  logs: [],
  currentWorkout: null,
  forecastSettings: structuredClone(defaultForecastSettings),
  ui: { ...defaultUiSettings },
  schedules: structuredClone(defaultScheduleSettings),
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

function mergeScheduleSettings(saved = {}) {
  return Object.fromEntries(Object.entries(defaultScheduleSettings).map(([key, defaults]) => {
    const current = saved?.[key] || {};
    return [key, {
      enabled: Boolean(current.enabled),
      days: Array.isArray(current.days) && current.days.length ? current.days.filter((day) => DAYS.includes(day)) : [...defaults.days],
    }];
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
      beginnerProfile: { ...defaultState.beginnerProfile, ...(parsed.beginnerProfile || {}) },
      postureProfile: { ...defaultState.postureProfile, ...(parsed.postureProfile || {}) },
      calisthenicsPlan: { ...defaultState.calisthenicsPlan, ...(parsed.calisthenicsPlan || {}) },
      flipProfile: { ...defaultState.flipProfile, ...(parsed.flipProfile || {}) },
      mobilityProfile: { ...defaultState.mobilityProfile, ...(parsed.mobilityProfile || {}) },
      forecastSettings: { ...defaultForecastSettings, ...(parsed.forecastSettings || {}) },
      ui: { ...defaultUiSettings, ...(parsed.ui || {}) },
      schedules: mergeScheduleSettings(parsed.schedules),
      muscleGoals: parsed.muscleGoals || {},
    };
    next.forecastSettings.jumpBaselines = { ...defaultForecastSettings.jumpBaselines, ...(parsed.forecastSettings?.jumpBaselines || {}) };
    if (!Array.isArray(next.jumpProfile.goals)) next.jumpProfile.goals = parsed.jumpProfile?.goal ? [parsed.jumpProfile.goal] : [...defaultJumpProfile.goals];
    if (!Array.isArray(next.jumpProfile.equipment)) next.jumpProfile.equipment = [...defaultJumpProfile.equipment];
    if (!Array.isArray(next.beginnerProfile.equipment)) next.beginnerProfile.equipment = [...defaultBeginnerProfile.equipment];
    if (!Array.isArray(next.beginnerProfile.physiquePriorities)) next.beginnerProfile.physiquePriorities = [];
    if (!Array.isArray(next.postureProfile.equipment)) next.postureProfile.equipment = [...defaultPostureProfile.equipment];
    if (!Array.isArray(next.calisthenicsPlan.goals)) next.calisthenicsPlan.goals = [...defaultCalisthenicsPlan.goals];
    if (!Array.isArray(next.calisthenicsPlan.equipment)) next.calisthenicsPlan.equipment = [...defaultCalisthenicsPlan.equipment];
    if (!Array.isArray(next.flipProfile.goals)) next.flipProfile.goals = [...defaultFlipProfile.goals];
    if (!Array.isArray(next.flipProfile.equipment)) next.flipProfile.equipment = [...defaultFlipProfile.equipment];
    if (!Array.isArray(next.mobilityProfile.goals)) next.mobilityProfile.goals = [...defaultMobilityProfile.goals];
    if (!Array.isArray(next.mobilityProfile.equipment)) next.mobilityProfile.equipment = [...defaultMobilityProfile.equipment];
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
  applyUiSettings();
  wireUiSettings();
  wirePressFeedback();
  wireTabs();
  renderPresets();
  renderInjuryControls("generator");
  renderInjuryControls("jump");
  hydrateCalisthenics();
  renderAll();
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
  document.getElementById("stickyBuildBtn")?.addEventListener("click", () => runActiveBuild());
  document.getElementById("workoutResult").addEventListener("click", (event) => {
    const target = eventTargetElement(event);
    if (!target) return;
    const rerollButton = target.closest("[data-reroll]");
    if (rerollButton) rerollExercise(rerollButton.dataset.reroll);
    const regressButton = target.closest("[data-regress]");
    if (regressButton) regressExercise(regressButton.dataset.regress);
    const resetButton = target.closest("[data-reset-exercise]");
    if (resetButton) resetExercise(resetButton.dataset.resetExercise);
  });
  document.getElementById("beginnerResult").addEventListener("click", (event) => {
    const target = eventTargetElement(event);
    if (!target) return;
    const rerollButton = target.closest("[data-beginner-reroll]");
    if (rerollButton) rerollBeginnerExercise(rerollButton.dataset.beginnerReroll);
    const regressButton = target.closest("[data-beginner-regress]");
    if (regressButton) regressBeginnerExercise(regressButton.dataset.beginnerRegress);
    const resetButton = target.closest("[data-beginner-reset]");
    if (resetButton) resetBeginnerExercise(resetButton.dataset.beginnerReset);
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
  document.getElementById("generateBeginnerBtn").addEventListener("click", () => {
    state.currentBeginnerPlan = generateBeginnerPlan();
    saveState();
    renderAll();
    document.getElementById("beginnerResult").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("resetBeginnerBtn").addEventListener("click", () => {
    state.beginnerProfile = { ...defaultBeginnerProfile };
    saveState();
    renderAll();
  });
  document.getElementById("generatePostureBtn").addEventListener("click", () => {
    state.currentPosturePlan = generatePosturePlan();
    saveState();
    renderAll();
    document.getElementById("postureResult").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("resetPostureBtn").addEventListener("click", () => {
    state.postureProfile = { ...defaultPostureProfile };
    saveState();
    renderAll();
  });
  document.getElementById("generateCalisthenicsPlanBtn").addEventListener("click", () => {
    state.currentCalisthenicsPlan = generateCalisthenicsPlan();
    saveState();
    renderAll();
    document.getElementById("calisthenicsPlanResult").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("resetCalisthenicsPlanBtn").addEventListener("click", () => {
    state.calisthenicsPlan = { ...defaultCalisthenicsPlan };
    saveState();
    renderAll();
  });
  document.getElementById("generateFlipPlanBtn").addEventListener("click", () => {
    state.currentFlipPlan = generateFlipPlan();
    saveState();
    renderAll();
    document.getElementById("flipPlanResult").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("resetFlipPlanBtn").addEventListener("click", () => {
    state.flipProfile = { ...defaultFlipProfile };
    saveState();
    renderAll();
  });
  document.getElementById("generateMobilityPlanBtn").addEventListener("click", () => {
    state.currentMobilityPlan = generateMobilityPlan();
    saveState();
    renderAll();
    document.getElementById("mobilityPlanResult").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("resetMobilityPlanBtn").addEventListener("click", () => {
    state.mobilityProfile = { ...defaultMobilityProfile };
    saveState();
    renderAll();
  });
}

function eventTargetElement(event) {
  if (event.target instanceof Element) return event.target;
  return event.target?.parentElement || null;
}

function applyUiSettings() {
  document.body.dataset.theme = state.ui.theme || "dark";
  document.documentElement.style.setProperty("--accent", state.ui.accent || "#64d2a4");
}

function wireUiSettings() {
  const panel = document.getElementById("uiPanel");
  const themeInput = document.getElementById("themeInput");
  const accentInput = document.getElementById("accentInput");
  document.getElementById("customizeBtn")?.addEventListener("click", () => panel?.classList.toggle("open"));
  document.getElementById("closeUiPanelBtn")?.addEventListener("click", () => panel?.classList.remove("open"));
  if (themeInput) {
    themeInput.value = state.ui.theme;
    themeInput.onchange = () => {
      state.ui.theme = themeInput.value;
      saveState();
      applyUiSettings();
    };
  }
  if (accentInput) {
    accentInput.value = state.ui.accent;
    accentInput.oninput = () => {
      state.ui.accent = accentInput.value;
      saveState();
      applyUiSettings();
    };
  }
}

function activeTabId() {
  return document.querySelector(".tab.active")?.dataset.tab || "generator";
}

function runActiveBuild() {
  const map = {
    generator: "generateBtn",
    beginner: "generateBeginnerBtn",
    posture: "generatePostureBtn",
    calisthenics: "generateCalisthenicsPlanBtn",
    flips: "generateFlipPlanBtn",
    mobility: "generateMobilityPlanBtn",
    recomp: "generateRecompBtn",
    jump: "generateJumpBlockBtn",
  };
  const id = map[activeTabId()];
  if (id) document.getElementById(id)?.click();
}

function updateStickyBuildBar() {
  const button = document.getElementById("stickyBuildBtn");
  if (!button) return;
  const labels = {
    generator: "Generate Session",
    beginner: "Build Beginner Plan",
    posture: "Diagnose Posture",
    calisthenics: "Build Skill Plan",
    flips: "Build Flip Plan",
    mobility: "Build Mobility Plan",
    recomp: "Build Recomp Plan",
    jump: "Build Jump Block",
  };
  button.textContent = labels[activeTabId()] || "Build";
  button.disabled = !labels[activeTabId()];
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
      updateStickyBuildBar();
    });
  });
  updateStickyBuildBar();
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
    ["limiterInput", "limiter"],
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

function hydrateBeginnerProfile() {
  hydrateSliderSet("beginnerSliders", BEGINNER_SLIDERS, state.beginnerProfile, "beginner");
  [
    ["beginnerSessionsInput", "sessions"],
    ["beginnerLengthInput", "length"],
    ["beginnerConfidenceInput", "confidence"],
    ["beginnerGenderInput", "gender"],
    ["beginnerBodyFocusInput", "bodyFocus"],
    ["beginnerDaysInput", "days"],
  ].forEach(([id, key]) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.value = state.beginnerProfile[key];
    input.onchange = () => {
      state.beginnerProfile[key] = input.value;
      saveState();
    };
  });
}

function hydratePostureProfile() {
  hydrateSliderSet("postureSliders", POSTURE_SLIDERS, state.postureProfile, "posture");
  [
    ["postureDeskInput", "desk"],
    ["postureTrainingInput", "training"],
    ["posturePainInput", "pain"],
    ["postureTimeInput", "time"],
  ].forEach(([id, key]) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.value = state.postureProfile[key];
    input.onchange = () => {
      state.postureProfile[key] = input.value;
      saveState();
    };
  });
}

function hydrateCalisthenicsPlan() {
  hydrateSliderSet("calisthenicsPlanSliders", CALISTHENICS_PLAN_SLIDERS, state.calisthenicsPlan, "skill");
  [
    ["calisthenicsSessionsInput", "sessions"],
    ["calisthenicsLevelInput", "level"],
  ].forEach(([id, key]) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.value = state.calisthenicsPlan[key];
    input.onchange = () => {
      state.calisthenicsPlan[key] = input.value;
      saveState();
    };
  });
}

function hydrateFlipProfile() {
  hydrateSliderSet("flipSliders", FLIP_SLIDERS, state.flipProfile, "flip");
  [
    ["flipSessionsInput", "sessions"],
    ["flipLevelInput", "level"],
    ["flipSurfaceInput", "surface"],
  ].forEach(([id, key]) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.value = state.flipProfile[key];
    input.onchange = () => {
      state.flipProfile[key] = input.value;
      saveState();
    };
  });
}

function hydrateMobilityProfile() {
  hydrateSliderSet("mobilitySliders", MOBILITY_SLIDERS, state.mobilityProfile, "mobility");
  [
    ["mobilityTimeInput", "time"],
    ["mobilityFrequencyInput", "frequency"],
    ["mobilityIntensityInput", "intensity"],
  ].forEach(([id, key]) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.value = state.mobilityProfile[key];
    input.onchange = () => {
      state.mobilityProfile[key] = input.value;
      saveState();
    };
  });
}

function hydrateSliderSet(containerId, sliders, profile, suffix) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = sliders.map(([key, label, help]) => `
    <label class="slider-control">
      <span class="slider-label">${label}<output id="${key}${suffix}Output">${profile[key]}</output></span>
      <input type="range" min="0" max="10" step="1" value="${profile[key]}" data-slider-scope="${suffix}" data-slider-key="${key}" />
      <small>${help}</small>
    </label>
  `).join("");
  container.querySelectorAll("[data-slider-key]").forEach((input) => {
    input.addEventListener("input", () => {
      profile[input.dataset.sliderKey] = Number(input.value);
      document.getElementById(`${input.dataset.sliderKey}${suffix}Output`).textContent = input.value;
      saveState();
    });
  });
}

function renderGoalChipPicker(containerId, options, selected, dataName, onToggle) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = options.map(([id, label]) => `<button class="chip ${selected.includes(id) ? "active" : ""}" data-${dataName}="${id}">${label}</button>`).join("");
  container.querySelectorAll(`[data-${dataName}]`).forEach((button) => {
    button.addEventListener("click", () => onToggle(button.dataset[dataName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())]));
  });
}

function renderBeginnerEquipment() {
  renderMultiPicker("beginnerEquipmentPicker", BEGINNER_EQUIPMENT, state.beginnerProfile.equipment, "beginner-equipment", (item) => {
    state.beginnerProfile.equipment = toggleArrayValue(state.beginnerProfile.equipment, item);
    if (!state.beginnerProfile.equipment.length) state.beginnerProfile.equipment = ["Bodyweight"];
    saveState();
    renderBeginnerEquipment();
  });
}

function renderBeginnerPhysiquePriorities() {
  const toggle = document.getElementById("beginnerPhysiqueToggle");
  const picker = document.getElementById("beginnerPhysiquePicker");
  const coach = document.getElementById("beginnerPhysiqueCoach");
  if (!toggle || !picker || !coach) return;
  toggle.innerHTML = `
    <button class="chip ${state.beginnerProfile.usePhysiquePriorities ? "" : "active"}" data-beginner-physique-enabled="false">Keep it simple</button>
    <button class="chip ${state.beginnerProfile.usePhysiquePriorities ? "active" : ""}" data-beginner-physique-enabled="true">Prioritize a look</button>
  `;
  toggle.querySelectorAll("[data-beginner-physique-enabled]").forEach((button) => {
    button.addEventListener("click", () => {
      state.beginnerProfile.usePhysiquePriorities = button.dataset.beginnerPhysiqueEnabled === "true";
      if (!state.beginnerProfile.usePhysiquePriorities) state.beginnerProfile.physiquePriorities = [];
      saveState();
      renderBeginnerPhysiquePriorities();
    });
  });

  if (!state.beginnerProfile.usePhysiquePriorities) {
    picker.innerHTML = "";
    coach.className = "stack empty-state";
    coach.textContent = "Physique priority coaching is off.";
    return;
  }

  picker.innerHTML = BEGINNER_PHYSIQUE_PRIORITIES.map(([id, label]) => `
    <button class="chip ${state.beginnerProfile.physiquePriorities.includes(id) ? "active" : ""}" data-beginner-physique="${id}">${label}</button>
  `).join("");
  picker.querySelectorAll("[data-beginner-physique]").forEach((button) => {
    button.addEventListener("click", () => {
      state.beginnerProfile.physiquePriorities = toggleArrayValue(state.beginnerProfile.physiquePriorities, button.dataset.beginnerPhysique);
      saveState();
      renderBeginnerPhysiquePriorities();
    });
  });
  const translations = beginnerPhysiqueTranslations(state.beginnerProfile);
  coach.className = translations.length ? "stack" : "stack empty-state";
  coach.innerHTML = translations.length
    ? translations.map((note) => `<div class="list-item">${note}</div>`).join("")
    : "Choose one or two priorities. The engine will translate vague goals into useful targets.";
}

function renderPostureEquipment() {
  renderMultiPicker("postureEquipmentPicker", POSTURE_EQUIPMENT, state.postureProfile.equipment, "posture-equipment", (item) => {
    state.postureProfile.equipment = toggleArrayValue(state.postureProfile.equipment, item);
    if (!state.postureProfile.equipment.length) state.postureProfile.equipment = ["Bodyweight"];
    saveState();
    renderPostureEquipment();
  });
}

function renderCalisthenicsPickers() {
  const goals = document.getElementById("calisthenicsGoalPicker");
  if (goals) {
    goals.innerHTML = CALISTHENICS_GOALS.map(([id, label]) => `<button class="chip ${state.calisthenicsPlan.goals.includes(id) ? "active" : ""}" data-calisthenics-goal="${id}">${label}</button>`).join("");
    goals.querySelectorAll("[data-calisthenics-goal]").forEach((button) => {
      button.addEventListener("click", () => {
        state.calisthenicsPlan.goals = toggleArrayValue(state.calisthenicsPlan.goals, button.dataset.calisthenicsGoal);
        if (!state.calisthenicsPlan.goals.length) state.calisthenicsPlan.goals = ["pullUp"];
        saveState();
        renderCalisthenicsPickers();
      });
    });
  }
  renderMultiPicker("calisthenicsEquipmentPicker", CALISTHENICS_EQUIPMENT, state.calisthenicsPlan.equipment, "calisthenics-equipment", (item) => {
    state.calisthenicsPlan.equipment = toggleArrayValue(state.calisthenicsPlan.equipment, item);
    if (!state.calisthenicsPlan.equipment.length) state.calisthenicsPlan.equipment = ["Bodyweight"];
    saveState();
    renderCalisthenicsPickers();
  });
}

function renderFlipPickers() {
  renderGoalChipPicker("flipGoalPicker", FLIP_GOALS, state.flipProfile.goals, "flip-goal", (goal) => {
    state.flipProfile.goals = toggleArrayValue(state.flipProfile.goals, goal);
    if (!state.flipProfile.goals.length) state.flipProfile.goals = ["backFlip"];
    saveState();
    renderFlipPickers();
  });
  renderMultiPicker("flipEquipmentPicker", FLIP_EQUIPMENT, state.flipProfile.equipment, "flip-equipment", (item) => {
    state.flipProfile.equipment = toggleArrayValue(state.flipProfile.equipment, item);
    if (!state.flipProfile.equipment.length) state.flipProfile.equipment = ["Open floor"];
    saveState();
    renderFlipPickers();
  });
}

function renderMobilityPickers() {
  renderGoalChipPicker("mobilityGoalPicker", MOBILITY_GOALS, state.mobilityProfile.goals, "mobility-goal", (goal) => {
    state.mobilityProfile.goals = toggleArrayValue(state.mobilityProfile.goals, goal);
    if (!state.mobilityProfile.goals.length) state.mobilityProfile.goals = ["deepSquat"];
    saveState();
    renderMobilityPickers();
  });
  renderMultiPicker("mobilityEquipmentPicker", MOBILITY_EQUIPMENT, state.mobilityProfile.equipment, "mobility-equipment", (item) => {
    state.mobilityProfile.equipment = toggleArrayValue(state.mobilityProfile.equipment, item);
    if (!state.mobilityProfile.equipment.length) state.mobilityProfile.equipment = ["Bodyweight"];
    saveState();
    renderMobilityPickers();
  });
}

function renderMultiPicker(containerId, options, selected, type, onToggle) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = options.map((item) => buttonChip(item, selected.includes(item), type)).join("");
  container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => onToggle(button.dataset.value));
  });
}

function toggleArrayValue(items, value) {
  return items.includes(value) ? items.filter((item) => item !== value) : [...items, value];
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

function generateBeginnerPlan() {
  const profile = { ...state.beginnerProfile };
  const fatLoss = profile.fatLoss >= 7;
  const strength = profile.strengthGain >= 7;
  const growth = profile.muscleGrowth >= 6;
  const aesthetics = profile.aesthetics >= 6;
  const sessions = Number(profile.sessions);
  const sets = profile.length === "20" ? "2" : strength ? "3-4" : "3";
  const reps = strength ? "5-8" : growth ? "8-12" : "8-10";
  const density = fatLoss ? "Finish with 8-12 minutes of brisk incline walking, bike, or step intervals." : "Finish with 5 minutes of easy mobility or walking.";
  const slotCap = profile.length === "20" ? 4 : profile.length === "50" ? 6 : 5;
  const slots = beginnerSlots(profile, { strength, growth, aesthetics }).slice(0, slotCap);
  const routine = slots
    .map((slot, index) => createBeginnerExercise(slot, profile, { sets, reps, index }))
    .filter(Boolean);
  const notes = [
    `Beginner priority blend: muscle growth ${profile.muscleGrowth}/10, fat loss ${profile.fatLoss}/10, strength ${profile.strengthGain}/10, aesthetics ${profile.aesthetics}/10.`,
    ...beginnerPhysiqueTranslations(profile),
    strength ? "Strength is high: add weight only when every rep looks the same and you finish with reps in reserve." : "Progress by adding reps first, then load.",
    fatLoss ? "Fat loss is high: keep lifting quality, then use steps and short finishers for the calorie burn." : "Fat loss is not the main driver, so the plan protects recovery and skill.",
    profile.confidence === "low" ? "Low confidence: repeat this same template for 2-3 weeks before adding variety." : "Use the same movement slots each week, but rotate easy substitutions when needed.",
    profile.bodyFocus === "upper" ? "Upper body priority is on: lower-body work is reduced so chest, lats, delts, arms, and trunk get the useful slots." : profile.bodyFocus === "lower" ? "Lower body priority is on: upper work stays minimal while legs, glutes, hamstrings, and calves get priority." : "Upper and lower body are both included.",
    profile.days === "busy" ? "Busy schedule: any 2 completed sessions count. Do not restart the week because one day moves." : `${sessions} sessions per week with at least one rest day between harder lower-body sessions.`,
  ];
  return {
    id: crypto.randomUUID(),
    title: "Beginner Starter Plan",
    createdAt: new Date().toISOString(),
    profile,
    routine,
    finisher: density,
    notes,
  };
}

function beginnerSlots(profile, flags) {
  const priorities = profile.usePhysiquePriorities ? profile.physiquePriorities : [];
  const wants = (id) => priorities.includes(id);
  const masculineAbs = wants("absSummer") && profile.gender !== "female";
  const feminineAbs = wants("absSummer") && profile.gender === "female";
  const pushTarget = wants("biggerChest") || masculineAbs ? "Upper chest" : flags.aesthetics ? "Upper chest" : "Mid/lower chest";
  const lowerTarget = wants("biggerGlutes") || (feminineAbs && flags.aesthetics) ? "Glutes" : flags.aesthetics ? "Glutes" : "Quads";
  const upperSlots = [
    { slot: "push", label: wants("biggerChest") || masculineAbs ? "Upper chest priority" : "Beginner push", targetMuscle: pushTarget, patterns: ["horizontal press", "upper press"], preferred: wants("biggerChest") || masculineAbs ? ["incline-db-press", "low-incline-machine-press", "feet-elevated-push-up", "db-bench-press", "machine-chest-press", "incline-push-up"] : ["db-bench-press", "machine-chest-press", "incline-push-up", "push-up", "feet-elevated-push-up"], goal: flags.growth ? "Hypertrophy" : "Strength + Hypertrophy" },
    { slot: "pull", label: wants("vTaper") || masculineAbs ? "V-taper lat priority" : "Beginner pull", targetMuscle: "Lats", patterns: ["vertical pull", "row"], preferred: ["lat-pulldown", "half-kneeling-single-arm-pulldown", "eccentric-chin-up", "pull-up-negative", "scapular-pull-up", "inverted-row", "one-arm-db-row", "chest-supported-machine-row", "chest-supported-db-row"], goal: flags.strength ? "Strength" : "Strength + Hypertrophy" },
    { slot: "aesthetic", label: wants("widerShoulders") || wants("vTaper") || masculineAbs ? "Shoulder width accessory" : "Aesthetic accessory", targetMuscle: "Side delts", patterns: ["lateral raise", "rear delt", "row"], preferred: ["machine-lateral-raise", "db-lateral-raise", "lean-away-cable-lateral-raise", "cable-lateral-raise", "band-lateral-raise", "cable-face-pull", "band-face-pull", "prone-db-rear-delt-raise"], goal: "Hypertrophy" },
  ];
  const lowerSlots = [
    { slot: "lower", label: wants("biggerGlutes") ? "Glute-focused lower base" : "Lower-body base", targetMuscle: lowerTarget, patterns: ["squat", "single leg", "hinge"], preferred: wants("biggerGlutes") ? ["bulgarian-split-squat", "reverse-lunge", "db-hip-thrust", "db-romanian-deadlift", "goblet-squat", "deep-leg-press"] : ["deep-leg-press", "goblet-squat", "box-squat-to-bench", "front-foot-elevated-split-squat", "reverse-lunge", "step-down"], goal: flags.strength ? "Strength" : "Strength + Hypertrophy" },
    { slot: "hinge", label: wants("athleticLegs") ? "Athletic posterior chain" : "Hinge / posterior chain", targetMuscle: "Hamstrings", patterns: ["hinge", "knee flexion"], preferred: ["hamstring-curl", "hamstring-slider-curl", "db-romanian-deadlift", "single-leg-hip-hinge", "back-extension"], goal: "Strength + Hypertrophy" },
  ];
  const coreSlot = { slot: "core", label: feminineAbs ? "Lean waist + trunk control" : "Waist + trunk control", targetMuscle: "Abs", patterns: ["anti-extension", "anti-rotation", "anti-lateral flexion"], preferred: ["dead-bug", "hollow-body-hold", "pallof-press", "band-pallof-press", "side-plank"], goal: "Low-hypertrophy strength" };
  const armSlot = { slot: "arms", label: "Arm accessory", targetMuscle: "Biceps", patterns: ["curl", "elbow extension"], preferred: ["cable-curl", "preacher-curl-machine", "db-curl", "hammer-curl", "cable-pushdown", "db-overhead-triceps-extension"], goal: "Hypertrophy" };
  let slots = profile.bodyFocus === "upper" ? [...upperSlots, coreSlot, armSlot] : profile.bodyFocus === "lower" ? [...lowerSlots, coreSlot, ...upperSlots.slice(0, 1)] : [...upperSlots.slice(0, masculineAbs || wants("vTaper") ? 3 : 2), ...lowerSlots, coreSlot];

  if (wants("biggerArms") && !slots.some((slot) => slot.slot === "arms")) slots.push(armSlot);
  if ((wants("absSummer") || wants("leanerWaist")) && !slots.some((slot) => slot.slot === "core")) slots.push(coreSlot);
  return slots;
}

function beginnerPhysiqueTranslations(profile) {
  if (!profile.usePhysiquePriorities || !profile.physiquePriorities?.length) return [];
  const priorities = new Set(profile.physiquePriorities);
  const notes = [];
  if (priorities.has("absSummer")) notes.push("Abs for summer translation: visible abs mostly come from lower body fat plus enough shoulder/lats/chest to create a V-taper. The plan trains core, but it will not waste the whole session on ab burnouts.");
  if (priorities.has("absSummer") && profile.gender === "female") notes.push("Feminine abs framing: the plan keeps trunk work useful but does not automatically force a big V-taper bias unless you also choose V-taper or upper-body priority.");
  if (priorities.has("absSummer") && profile.gender !== "female") notes.push("Masculine abs framing: the app treats this as low body fat plus upper chest, lats, and side delts for the visual frame most beginners actually mean.");
  if (priorities.has("leanerWaist")) notes.push("Leaner waist translation: use fat-loss habits, steps, and trunk control. Side-bend volume is kept low so the goal stays a smaller-looking waist, not more oblique pump.");
  if (priorities.has("biggerChest")) notes.push("Bigger chest translation: prioritize upper-chest-friendly pressing and push-up progressions, then add volume slowly so shoulders and elbows keep up.");
  if (priorities.has("vTaper")) notes.push("V-taper translation: lats and side delts matter more than doing endless ab exercises.");
  if (priorities.has("widerShoulders")) notes.push("Wider shoulders translation: side delts and rear delts get priority while pressing stays simple.");
  if (priorities.has("biggerArms")) notes.push("Bigger arms translation: arms grow fastest when pulling, pressing, and a small amount of direct curls/extensions all progress.");
  if (priorities.has("biggerGlutes")) notes.push("Bigger glutes translation: split squats, hinges, and deep controlled leg work beat random kickbacks for beginners.");
  if (priorities.has("athleticLegs")) notes.push("Athletic legs translation: build squat, hinge, single-leg control, and calves before chasing flashy leg finishers.");
  return notes;
}

function createBeginnerExercise(slot, profile, prescription, usedIds = new Set()) {
  const exercise = pickBeginnerExercise(slot, profile, usedIds);
  if (!exercise) return null;
  const item = beginnerPlanExercise(exercise, slot, profile, prescription);
  item.baseline = snapshotBeginnerPlan(item);
  return item;
}

function pickBeginnerExercise(slot, profile, usedIds = new Set(), currentId = "") {
  const preferred = slot.preferred
    .map((id) => EXERCISES.find((exercise) => exercise.id === id))
    .filter(Boolean);
  const pool = [
    ...preferred,
    ...EXERCISES.filter((exercise) => {
      const hitsMuscle = exercise.primary.includes(slot.targetMuscle) || exercise.secondary.includes(slot.targetMuscle);
      return hitsMuscle && slot.patterns.includes(exercise.pattern);
    }),
  ];
  const seen = new Set();
  return pool
    .filter((exercise) => {
      if (seen.has(exercise.id)) return false;
      seen.add(exercise.id);
      return exercise.id !== currentId && !usedIds.has(exercise.id) && beginnerExerciseAvailable(exercise, profile) && !state.blocked.includes(exercise.id);
    })
    .map((exercise) => ({ exercise, score: scoreBeginnerExercise(exercise, slot, profile) }))
    .sort((a, b) => b.score - a.score)[0]?.exercise || null;
}

function beginnerPlanExercise(exercise, slot, profile, prescription) {
  const strength = profile.strengthGain >= 7;
  const growth = profile.muscleGrowth >= 6;
  const isPullupPattern = ["pull-up", "pull-up-negative", "eccentric-chin-up", "scapular-pull-up", "band-assisted-pull-up"].includes(exercise.id);
  let reps = strength ? "5-8" : growth ? "8-12" : prescription.reps;
  if (isPullupPattern) reps = ["pull-up-negative", "eccentric-chin-up"].includes(exercise.id) ? "2-4 slow negatives" : "3-8 clean reps";
  if (exercise.pattern.includes("anti") || exercise.defaultReps.includes("sec")) reps = exercise.defaultReps;
  const item = {
    id: crypto.randomUUID(),
    exerciseId: exercise.id,
    exercise,
    slot: slot.slot,
    slotLabel: slot.label,
    targetMuscle: slot.targetMuscle,
    goal: slot.goal,
    order: prescription.index + 1,
    sets: exercise.pattern.includes("anti") ? "2" : prescription.sets,
    reps,
    rest: strength ? "90 sec-2 min" : "60-90 sec",
    rir: profile.confidence === "low" ? "3-4" : "2-3",
    eccentric: ["pull-up-negative", "eccentric-chin-up"].includes(exercise.id) ? "5 sec" : tempoForExercise(exercise, slot.goal).eccentric,
    concentric: ["pull-up-negative", "eccentric-chin-up"].includes(exercise.id) ? "Step/jump assist" : tempoForExercise(exercise, slot.goal).concentric,
    why: `${slot.label}: ${exercise.why}`,
    tradeoff: "",
    isRegressed: false,
  };
  return item;
}

function snapshotBeginnerPlan(item) {
  return {
    exerciseId: item.exercise.id,
    slot: item.slot,
    slotLabel: item.slotLabel,
    targetMuscle: item.targetMuscle,
    goal: item.goal,
    order: item.order,
    sets: item.sets,
    reps: item.reps,
    rest: item.rest,
    rir: item.rir,
    eccentric: item.eccentric,
    concentric: item.concentric,
    why: item.why,
  };
}

function applyBeginnerSnapshot(item, snapshot) {
  const exercise = EXERCISES.find((candidate) => candidate.id === snapshot.exerciseId) || item.exercise;
  return {
    ...item,
    exerciseId: exercise.id,
    exercise,
    slot: snapshot.slot,
    slotLabel: snapshot.slotLabel,
    targetMuscle: snapshot.targetMuscle,
    goal: snapshot.goal,
    order: snapshot.order,
    sets: snapshot.sets,
    reps: snapshot.reps,
    rest: snapshot.rest,
    rir: snapshot.rir,
    eccentric: snapshot.eccentric,
    concentric: snapshot.concentric,
    why: snapshot.why,
    tradeoff: `Reset to ${exercise.name}.`,
    isRegressed: false,
    baseline: snapshot,
  };
}

function beginnerExerciseAvailable(exercise, profile) {
  return exercise.equipment.every((item) => {
    if (item === "Bodyweight") return profile.equipment.includes("Bodyweight");
    if (item === "Pull-up bar") return profile.equipment.includes("Pull-up bar");
    if (item === "Cable machine") return profile.equipment.includes("Cable machine");
    if (["Dumbbells", "Barbell", "Bench", "Bands", "Back extension"].includes(item)) return profile.equipment.includes("Free-weights");
    if (["Machines", "Leg press", "Leg extension", "Hamstring curl", "Adductor machine", "Calf raise machine"].includes(item)) return profile.equipment.includes("Machines");
    return false;
  });
}

function scoreBeginnerExercise(exercise, slot, profile) {
  let score = 0;
  const preferredIndex = slot.preferred.indexOf(exercise.id);
  if (preferredIndex >= 0) score += 50 - preferredIndex * 6;
  if (exercise.primary.includes(slot.targetMuscle)) score += 12;
  if (exercise.pattern === slot.patterns[0]) score += 5;
  if (profile.confidence === "low") score -= Math.max(0, exercise.difficulty - 2) * 8 + exercise.jointStress;
  if (profile.strengthGain >= 7 && exercise.bestGoals.includes("Strength")) score += 6;
  if (profile.muscleGrowth >= 7 && exercise.bestGoals.includes("Hypertrophy")) score += 5;
  if (profile.fatLoss >= 7 && exercise.fatigue <= 3) score += 3;
  if (state.favorites.includes(exercise.id)) score += 5;
  return score;
}

function renderBeginnerPlan() {
  const container = document.getElementById("beginnerResult");
  if (!container) return;
  const plan = state.currentBeginnerPlan;
  if (!plan) {
    container.innerHTML = "";
    return;
  }
  if (!Array.isArray(plan.routine) || plan.routine.some((item) => !item.exercise)) {
    const rebuilt = generateBeginnerPlan();
    plan.routine = rebuilt.routine;
    plan.finisher = rebuilt.finisher;
    plan.notes = rebuilt.notes;
    saveState();
  }
  container.innerHTML = `
    <article class="result-card">
      <h2>${plan.title}</h2>
      <div class="meta-strip">
        <span class="pill">${plan.profile.sessions} sessions/week</span>
        <span class="pill">${plan.profile.length} min</span>
        <span class="pill">${plan.profile.equipment.join(", ")}</span>
      </div>
      <div class="stack">
        ${plan.routine.map(renderBeginnerExerciseCard).join("")}
      </div>
      <p class="note">${plan.finisher}</p>
      <h3>Rules</h3>
      <ul>${plan.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      ${renderProgramTools("beginner", plan.routine, plan.title)}
      ${renderForecastControls("beginner", forecastWeeks("beginner"), "Forecast for")}
    </article>
    ${plan.forecast ? renderForecastCard(plan.forecast.title, plan.forecast.summary, plan.forecast.metrics) : ""}
  `;
  wireForecastControls("beginner", () => runPlanForecast("beginner", "currentBeginnerPlan", renderBeginnerPlan, generateBeginnerForecast, "#beginnerResult"));
  wireProgramTools("beginner", plan.routine, plan.title);
  container.querySelectorAll("[data-beginner-reroll]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      rerollBeginnerExercise(button.dataset.beginnerReroll);
    });
  });
  container.querySelectorAll("[data-beginner-regress]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      regressBeginnerExercise(button.dataset.beginnerRegress);
    });
  });
  container.querySelectorAll("[data-beginner-reset]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      resetBeginnerExercise(button.dataset.beginnerReset);
    });
  });
}

function renderBeginnerExerciseCard(item) {
  const tempo = tempoForExercise(item.exercise, item.goal);
  return `
    <article class="exercise-card">
      <div class="exercise-top">
        <div class="exercise-title">
          <span class="exercise-index">${item.order}</span>
          <div>
            <h3>${item.exercise.name}</h3>
            <small class="muted">${item.slotLabel} - ${item.targetMuscle}</small>
          </div>
        </div>
        <div class="exercise-actions">
          <button class="small-button" data-beginner-reroll="${item.id}">Reroll</button>
          <button class="small-button" data-beginner-regress="${item.id}">Regress</button>
          <button class="small-button" data-beginner-reset="${item.id}">Reset</button>
        </div>
      </div>
      <div class="spec-grid">
        <div class="spec"><span>Sets ${infoTip("How many rounds of this exercise to do.")}</span><strong>${item.sets}</strong></div>
        <div class="spec"><span>Reps / time ${infoTip("How many reps, seconds, or each-side reps to complete per set.")}</span><strong>${item.reps}</strong></div>
        <div class="spec"><span>Rest ${infoTip("How long to recover before the next set.")}</span><strong>${item.rest}</strong></div>
        <div class="spec"><span>RIR ${infoTip("Reps in reserve. RIR 2 means stop when you could still do about two good reps.")}</span><strong>${item.rir}</strong></div>
        <div class="spec"><span>Eccentric ${infoTip("The lowering or lengthening part of the rep. Slower eccentrics teach control.")}</span><strong>${item.eccentric || tempo.eccentric}</strong></div>
        <div class="spec"><span>Concentric ${infoTip("The lifting or shortening part of the rep. Smooth means no jerking or bouncing.")}</span><strong>${item.concentric || tempo.concentric}</strong></div>
      </div>
      <details class="beginner-help">
        <summary>How to do it</summary>
        <p><strong>What it is:</strong> ${item.exercise.why}</p>
        <p><strong>Execution:</strong> ${item.exercise.cue}</p>
        <p><strong>Beginner check:</strong> Pick a version where the last rep still looks like the first. If form changes, use Regress before adding more weight.</p>
      </details>
      <p><strong>Cue:</strong> ${item.exercise.cue}</p>
      <p><strong>Why:</strong> ${item.why}</p>
      ${item.tradeoff ? `<p class="note">${item.tradeoff}</p>` : ""}
    </article>
  `;
}

function infoTip(text) {
  return `<button class="info-dot" type="button" aria-label="${escapeAttr(text)}" title="${escapeAttr(text)}">i</button>`;
}

function rerollBeginnerExercise(planId) {
  const plan = state.currentBeginnerPlan;
  const current = plan?.routine.find((item) => item.id === planId);
  if (!current) return;
  const usedIds = new Set(plan.routine.filter((item) => item.id !== planId).map((item) => item.exercise.id));
  const slot = beginnerSlotFromItem(current);
  const replacementExercise = pickBeginnerExercise(slot, plan.profile, usedIds, current.exercise.id);
  if (!replacementExercise) {
    current.tradeoff = `No beginner-friendly substitute is available for ${current.exercise.name} with this simple equipment setup.`;
    saveState();
    renderBeginnerPlan();
    return;
  }
  const replacement = beginnerPlanExercise(replacementExercise, slot, plan.profile, {
    sets: current.sets,
    reps: current.reps,
    index: current.order - 1,
  });
  replacement.id = current.id;
  replacement.baseline = snapshotBeginnerPlan(replacement);
  replacement.tradeoff = replacement.exercise.pattern === current.exercise.pattern
    ? `Rerolled from ${current.exercise.name}. Same beginner slot, new exercise.`
    : `Rerolled from ${current.exercise.name}. Closest beginner substitute changed from ${current.exercise.pattern} to ${replacement.exercise.pattern}.`;
  plan.routine = plan.routine.map((item) => (item.id === planId ? replacement : item));
  saveState();
  renderBeginnerPlan();
}

function regressBeginnerExercise(planId) {
  const plan = state.currentBeginnerPlan;
  const current = plan?.routine.find((item) => item.id === planId);
  if (!current) return;
  if (!current.baseline) current.baseline = snapshotBeginnerPlan(current);
  const usedIds = new Set(plan.routine.filter((item) => item.id !== planId).map((item) => item.exercise.id));
  const candidates = beginnerRegressionCandidates(current, plan.profile, usedIds);
  if (!candidates.length) {
    current.tradeoff = `No easier beginner regression is available for ${current.exercise.name} with the selected simple equipment. Use fewer reps, slower eccentrics, or add assistance.`;
    saveState();
    renderBeginnerPlan();
    return;
  }
  const replacement = beginnerPlanExercise(candidates[0].exercise, beginnerSlotFromItem(current), plan.profile, {
    sets: current.sets,
    reps: current.reps,
    index: current.order - 1,
  });
  replacement.id = current.id;
  replacement.baseline = current.baseline;
  replacement.isRegressed = true;
  applyRegressionPrescription(replacement, current);
  replacement.tradeoff = regressionMessage(current.exercise, replacement.exercise, replacement);
  plan.routine = plan.routine.map((item) => (item.id === planId ? replacement : item));
  saveState();
  renderBeginnerPlan();
}

function resetBeginnerExercise(planId) {
  const plan = state.currentBeginnerPlan;
  const current = plan?.routine.find((item) => item.id === planId);
  if (!current) return;
  const restored = applyBeginnerSnapshot(current, current.baseline || snapshotBeginnerPlan(current));
  plan.routine = plan.routine.map((item) => (item.id === planId ? restored : item));
  saveState();
  renderBeginnerPlan();
}

function beginnerSlotFromItem(item) {
  const slotDefaults = {
    lower: ["squat", "single leg"],
    push: ["horizontal press", "upper press"],
    pull: ["vertical pull", "row"],
    hinge: ["hinge", "knee flexion"],
    aesthetic: ["lateral raise", "curl", "elbow extension"],
    arms: ["curl", "elbow extension"],
    core: ["anti-extension", "anti-rotation", "anti-lateral flexion"],
  };
  return {
    slot: item.slot,
    label: item.slotLabel,
    targetMuscle: item.targetMuscle,
    goal: item.goal,
    patterns: slotDefaults[item.slot] || [item.exercise.pattern],
    preferred: beginnerPreferredForSlot(item.slot),
  };
}

function beginnerPreferredForSlot(slot) {
  return {
    lower: ["deep-leg-press", "goblet-squat", "box-squat-to-bench", "reverse-lunge", "front-foot-elevated-split-squat", "step-down"],
    push: ["db-bench-press", "machine-chest-press", "incline-push-up", "push-up", "low-incline-machine-press", "feet-elevated-push-up"],
    pull: ["lat-pulldown", "half-kneeling-single-arm-pulldown", "eccentric-chin-up", "pull-up-negative", "scapular-pull-up", "inverted-row", "one-arm-db-row", "chest-supported-machine-row", "chest-supported-db-row"],
    hinge: ["hamstring-curl", "hamstring-slider-curl", "db-romanian-deadlift", "single-leg-glute-bridge", "back-extension"],
    aesthetic: ["machine-lateral-raise", "db-lateral-raise", "lean-away-cable-lateral-raise", "cable-lateral-raise", "band-lateral-raise", "cable-curl", "db-curl", "cable-pushdown"],
    arms: ["db-curl", "hammer-curl", "cable-pushdown", "db-overhead-triceps-extension"],
    core: ["dead-bug", "pallof-press", "band-pallof-press", "side-plank"],
  }[slot] || [];
}

function beginnerRegressionCandidates(current, profile, usedIds) {
  return regressionCandidatesForAvailability(current, usedIds, (exercise) => beginnerExerciseAvailable(exercise, profile));
}

function generatePosturePlan() {
  const profile = { ...state.postureProfile };
  const ranked = POSTURE_SLIDERS
    .map(([key, label]) => ({ key, label, score: Number(profile[key]) }))
    .sort((a, b) => b.score - a.score);
  const active = ranked.filter((item) => item.score >= 5).slice(0, 4);
  const top = active.length ? active : ranked.slice(0, 2);
  const drills = top.flatMap((item) => postureDrillsFor(item.key, profile)).slice(0, Number(profile.time) >= 20 ? 8 : 5);
  const notes = [
    profile.pain === "moderate" ? "Moderate pain: keep every drill below 3/10 pain and treat this as a gentle control plan, not rehab or medical care." : "These are movement-quality drills, not medical diagnosis.",
    profile.desk === "high" ? "High sitting time: use one 2-minute reset midday plus the full plan later." : "Run this before lifting or on off days.",
    profile.training === "running" ? "Running/jumping context: knee tracking, ankle mobility, and hip stability get extra priority." : "Keep the work low fatigue so it improves your main training instead of stealing from it.",
  ];
  return {
    id: crypto.randomUUID(),
    title: `${top[0].label} Posture Plan`,
    createdAt: new Date().toISOString(),
    profile,
    diagnosis: top,
    drills,
    notes,
  };
}

function postureDrillsFor(key, profile) {
  const has = (item) => profile.equipment.includes(item);
  const band = has("Bands");
  const cable = has("Cable machine");
  const db = has("Dumbbells");
  const bench = has("Bench");
  const map = {
    forwardShoulder: [
      `${band ? "Band Face Pull" : cable ? "Cable Face Pull" : "Prone Y-T-W Raise"} - 2 x 12-20, pause with shoulders down`,
      `${band ? "Band External Rotation" : "Wall Slide"} - 2 x 8-12, ribs down`,
    ],
    anteriorPelvicTilt: [
      "Dead Bug with full exhale - 2 x 6-10 each",
      `${bench ? "Couch Stretch" : "Half-Kneeling Hip Flexor Stretch"} - 2 x 30 sec each, glute squeezed`,
    ],
    kneeTracking: [
      `${band ? "Banded TKE + Split Squat ISO" : "Step-Down to Stick"} - 2-3 x 5-8 each`,
      "Short-foot balance - 2 x 20 sec each",
    ],
    quadDominance: [
      `${db ? "DB Romanian Deadlift" : "Hip Hinge Wall Tap"} - 2-3 x 8-10, hamstrings load first`,
      "Glute Bridge ISO - 2 x 20-30 sec",
    ],
    thoracicMobility: [
      "Bench T-spine extension breathing - 2 x 5 breaths",
      "Open Book Rotation - 2 x 6 each",
    ],
    ankleMobility: [
      "Knee-to-wall ankle rocks - 2 x 10 each",
      `${db ? "Loaded Soleus Raise" : "Bent-knee calf raise"} - 2 x 10-15`,
    ],
    hipStability: [
      `${band ? "Lateral Band Walk" : "Side Plank Clamshell"} - 2 x 8-12 each`,
      "Single-leg RDL reach - 2 x 5 each, slow",
    ],
    scapularControl: [
      `${has("Pull-up bar") ? "Scapular Pull-Up" : "Scapular Push-Up"} - 2 x 6-10`,
      `${band ? "Band Straight-Arm Pulldown" : "Prone Swimmer"} - 2 x 10-15`,
    ],
  };
  return map[key] || [];
}

function renderPosturePlan() {
  const container = document.getElementById("postureResult");
  if (!container) return;
  const plan = state.currentPosturePlan;
  if (!plan) {
    container.innerHTML = "";
    return;
  }
  const drills = Array.isArray(plan.drills) ? plan.drills : [];
  const diagnosis = Array.isArray(plan.diagnosis) ? plan.diagnosis : [];
  const notes = Array.isArray(plan.notes) ? plan.notes : [];
  container.innerHTML = `
    <article class="result-card">
      <h2>${plan.title}</h2>
      <div class="meta-strip">
        <span class="pill">${plan.profile.time} min/day</span>
        <span class="pill">${plan.profile.pain} pain</span>
        <span class="pill">${plan.profile.equipment.join(", ")}</span>
      </div>
      <h3>Likely Weak Links</h3>
      <div class="stack">
        ${diagnosis.map((item) => `<div class="list-item"><strong>${item.label}</strong><p>${item.score}/10 signal strength</p></div>`).join("")}
      </div>
      <h3>Daily Reset</h3>
      <div class="stack">
        ${drills.map((item, index) => `<div class="exercise-card"><div class="exercise-title"><span class="exercise-index">${index + 1}</span><strong>${item}</strong></div></div>`).join("")}
      </div>
      <h3>Notes</h3>
      <ul>${notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      ${renderProgramTools("posture", drills, plan.title)}
      ${renderForecastControls("posture", forecastWeeks("posture", 6), "Forecast for")}
    </article>
    ${plan.forecast ? renderForecastCard(plan.forecast.title, plan.forecast.summary, plan.forecast.metrics) : ""}
  `;
  wireProgramTools("posture", drills, plan.title);
  wireForecastControls("posture", () => runPlanForecast("posture", "currentPosturePlan", renderPosturePlan, generatePostureForecast, "#postureResult"));
}

function generateCalisthenicsPlan() {
  const profile = { ...state.calisthenicsPlan };
  const goals = profile.goals.map((id) => Object.fromEntries(CALISTHENICS_GOALS)[id] || id);
  const sessions = Number(profile.sessions);
  const planSessions = Array.from({ length: sessions }, (_, index) => calisthenicsSession(index, profile));
  const notes = [
    `Goal blend: ${goals.join(", ")}.`,
    profile.straightArm >= 7 ? "Straight-arm priority is high: holds stay crisp, with long rests and no elbow pain." : "Straight-arm work is included only where it supports the selected goals.",
    profile.jointTolerance <= 4 ? "Low joint tolerance: use easier progressions, neutral wrists when possible, and stop before irritation accumulates." : "Progress only when positions look clean across all sets.",
    profile.skillPractice >= 7 ? "High skill practice: frequent low-fatigue exposures beat grinding rare max attempts." : "Skill work is balanced with basic strength.",
  ];
  return {
    id: crypto.randomUUID(),
    title: "Calisthenics Skill Plan",
    createdAt: new Date().toISOString(),
    profile,
    sessions: planSessions,
    notes,
  };
}

function calisthenicsSession(index, profile) {
  const focus = calisthenicsFocus(index, profile.goals);
  const drills = [
    "Warm-up: wrists, scapular circles, hollow body breathing - 5 minutes",
    ...calisthenicsSkillDrills(focus, profile),
    ...calisthenicsStrengthDrills(focus, profile),
  ];
  return {
    name: `Session ${String.fromCharCode(65 + index)} - ${focus}`,
    drills: drills.slice(0, profile.conditioning >= 7 ? 7 : 6),
  };
}

function calisthenicsFocus(index, goals) {
  const focusMap = {
    pullUp: "Vertical Pull",
    dip: "Dip Strength",
    pushUp: "Push Strength",
    handstand: "Handstand Line",
    lSit: "Compression",
    frontLever: "Front Lever",
    planche: "Planche Lean",
    muscleUp: "Pull + Transition",
    pistol: "Single-Leg Strength",
  };
  return focusMap[goals[index % goals.length]] || "Base Strength";
}

function calisthenicsSkillDrills(focus, profile) {
  const has = (item) => profile.equipment.includes(item);
  const easy = profile.level === "new" || profile.jointTolerance <= 4;
  if (focus.includes("Handstand")) return [`${easy ? "Wall plank walk-up" : "Chest-to-wall handstand hold"} - 4 x 15-30 sec`, "Wall line drill - 3 x 20 sec"];
  if (focus.includes("Front Lever")) return [`${has("Pull-up bar") ? "Tuck front lever hold" : "Hollow body pulldown"} - 4 x 6-12 sec`, "Scapular pull-up - 3 x 5-8"];
  if (focus.includes("Planche")) return [`${easy ? "Planche lean on incline" : "Planche lean"} - 4 x 8-20 sec`, "Scapular push-up - 3 x 8-12"];
  if (focus.includes("Compression")) return ["L-sit tuck hold - 5 x 6-15 sec", "Seated compression lift - 3 x 8-12"];
  if (focus.includes("Transition")) return [`${has("Bands") ? "Band-assisted transition drill" : "Low bar transition drill"} - 4 x 3-5`, "Explosive chest-to-bar pull path - 3 x 3"];
  return profile.skillPractice >= 6 ? ["Technique primer for main skill - 4 x low-fatigue reps"] : [];
}

function calisthenicsStrengthDrills(focus, profile) {
  const has = (item) => profile.equipment.includes(item);
  const assistedPull = has("Bands") ? "Band-Assisted Pull-Up" : "Pull-Up Negative";
  const rows = has("Rings") ? "Ring Row" : has("Pull-up bar") ? "Inverted Row under bar" : "Prone W Raise";
  const push = has("Parallettes") ? "Parallette Push-Up" : "Push-Up";
  const dip = has("Rings") && profile.jointTolerance >= 6 ? "Ring Dip Regression" : "Bench Dip or Eccentric Dip";
  if (focus.includes("Vertical Pull")) return [`${has("Pull-up bar") ? assistedPull : rows} - 3-4 x 3-8`, `${rows} - 3 x 8-12`, "Hollow body hold - 2 x 20-30 sec"];
  if (focus.includes("Dip")) return [`${dip} - 3-4 x 4-8`, `${push} - 3 x 8-12`, "Support hold - 3 x 10-20 sec"];
  if (focus.includes("Push")) return [`${push} - 3-4 x 6-15`, "Pike Push-Up - 3 x 5-10", "Side plank - 2 x 20-30 sec each"];
  if (focus.includes("Single-Leg")) return ["Box pistol squat or assisted pistol - 4 x 3-6 each", "Step-down - 3 x 6-8 each", "Calf raise - 2 x 10-15 each"];
  return [`${push} - 3 x 8-12`, `${has("Pull-up bar") ? assistedPull : rows} - 3 x 5-10`, "Dead Bug - 2 x 8 each"];
}

function renderCalisthenicsPlan() {
  const container = document.getElementById("calisthenicsPlanResult");
  if (!container) return;
  const plan = state.currentCalisthenicsPlan;
  if (!plan) {
    container.innerHTML = "";
    return;
  }
  const sessions = Array.isArray(plan.sessions) ? plan.sessions : [];
  const drills = sessions.flatMap((session) => session.drills || []);
  const notes = Array.isArray(plan.notes) ? plan.notes : [];
  container.innerHTML = `
    <article class="result-card">
      <h2>${plan.title}</h2>
      <div class="meta-strip">
        <span class="pill">${plan.profile.sessions} sessions/week</span>
        <span class="pill">${plan.profile.level}</span>
        <span class="pill">${plan.profile.equipment.join(", ")}</span>
      </div>
      <div class="stack">
        ${sessions.map((session) => `
          <section class="exercise-card">
            <h3>${session.name}</h3>
            <ol>${session.drills.map((drill) => `<li>${drill}</li>`).join("")}</ol>
          </section>
        `).join("")}
      </div>
      <h3>Rules</h3>
      <ul>${notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      ${renderProgramTools("calisthenics", drills, plan.title)}
      ${renderForecastControls("calisthenics", forecastWeeks("calisthenics"), "Forecast for")}
    </article>
    ${plan.forecast ? renderForecastCard(plan.forecast.title, plan.forecast.summary, plan.forecast.metrics) : ""}
  `;
  wireProgramTools("calisthenics", drills, plan.title);
  wireForecastControls("calisthenics", () => runPlanForecast("calisthenics", "currentCalisthenicsPlan", renderCalisthenicsPlan, generateCalisthenicsForecast, "#calisthenicsPlanResult"));
}

function generateFlipPlan() {
  const profile = { ...state.flipProfile };
  const goalNames = profile.goals.map((goal) => Object.fromEntries(FLIP_GOALS)[goal] || goal);
  const sessions = Array.from({ length: Number(profile.sessions) }, (_, index) => flipSession(index, profile));
  const notes = [
    `Goal blend: ${goalNames.join(", ")}.`,
    profile.level === "new" ? "New / cautious: no blind max attempts. Use mats, progressions, and a qualified spotter for new inversions." : "Keep skill reps crisp and stop before rotation speed or landing control drops.",
    profile.fearManagement >= 7 ? "Fear management is high: the block uses more prerequisite shapes, low-risk entries, and confidence reps." : "Confidence work stays present, but the plan can move faster if quality is there.",
    profile.surface === "floor" ? "Firm floor: avoid new flip attempts unless the skill is already consistent on softer surfaces." : "Soft surface selected: still treat landing quality as the limiter.",
  ];
  return {
    id: crypto.randomUUID(),
    title: `${goalNames.slice(0, 2).join(" + ")} Flip Plan`,
    createdAt: new Date().toISOString(),
    profile,
    sessions,
    notes,
  };
}

function flipSession(index, profile) {
  const focus = flipFocus(index, profile.goals);
  const drills = [
    "Prep: ankle bounces, snap-downs, hollow/arch switches - 5 minutes",
    ...flipSkillDrills(focus, profile),
    ...flipSupportDrills(focus, profile),
  ];
  return {
    name: `Session ${String.fromCharCode(65 + index)} - ${focus}`,
    drills: drills.slice(0, profile.level === "trained" ? 7 : 6),
  };
}

function flipFocus(index, goals) {
  const focusMap = {
    backFlip: "Back flip progressions",
    frontFlip: "Front flip progressions",
    sideFlip: "Side flip progressions",
    twisting: "Twisting shapes",
    tucking: "Tuck speed",
    landing: "Landing confidence",
  };
  return focusMap[goals[index % goals.length]] || "Flip basics";
}

function flipSkillDrills(focus, profile) {
  const has = (item) => profile.equipment.includes(item);
  const safe = profile.level === "new" || profile.fearManagement >= 7 || !has("Spotter");
  if (focus.includes("Back")) return [
    `${has("Wedge mat") ? "Backward roll down wedge" : "Backward roll to hollow"} - 4 x 3-5`,
    safe ? "Macaco / bridge kickover path rehearsal - 3 x 3 each" : "Spotted back tuck timer - 4 x 2-3",
    `${has("Trampoline") ? "Trampoline set jump to back drop" : "Set jump + arm swing stick"} - 4 x 3`,
  ];
  if (focus.includes("Front")) return [
    `${has("Wedge mat") ? "Dive roll down wedge" : "Dive roll to stand"} - 4 x 3`,
    has("Trampoline") ? "Trampoline front tuck shape - 4 x 2-3" : "Punch jump to fast tuck snap - 4 x 3",
    "Forward roll to immediate vertical jump - 3 x 3",
  ];
  if (focus.includes("Side")) return [
    "Cartwheel snap-down - 4 x 3 each",
    `${has("Soft mat") ? "Side roll to tuck shape" : "Aerial entry line drill"} - 3 x 3 each`,
    "Lateral bound to stick - 3 x 4 each",
  ];
  if (focus.includes("Twisting")) return [
    "Quarter-turn jump stick - 4 x 3 each",
    "Half-turn jump stick - 3 x 2 each",
    "Hollow-to-arch twist shape on floor - 3 x 5 each",
  ];
  if (focus.includes("Tuck")) return [
    "Tuck jump with fast knee drive - 5 x 3",
    `${has("Pull-up bar") ? "Hanging knee snap" : "V-up tuck snap"} - 3 x 6-10`,
    "Hollow rock to tuck - 3 x 6",
  ];
  return [
    "Snap-down to stick - 4 x 3",
    "Drop landing to quiet freeze - 3 x 3",
    "Single-leg stick landing - 2 x 4 each",
  ];
}

function flipSupportDrills(focus, profile) {
  const highLanding = profile.landingControl >= 7 || focus.includes("Landing");
  const power = profile.jumpPower >= 6 ? ["Countermovement jump - 4 x 2, full reset"] : ["Pogo hop - 3 x 12 sec, quiet contacts"];
  const tuck = profile.tuckSpeed >= 6 ? ["Dead bug tuck snap - 3 x 8 each"] : ["Hollow hold - 2 x 20-30 sec"];
  const landing = highLanding ? ["Split squat ISO or wall sit - 2 x 20-30 sec", "Calf raise with pause - 2 x 10-15"] : ["Easy calf raise - 2 x 10"];
  return [...power, ...tuck, ...landing];
}

function renderFlipPlan() {
  const container = document.getElementById("flipPlanResult");
  if (!container) return;
  const plan = state.currentFlipPlan;
  if (!plan) {
    container.innerHTML = "";
    return;
  }
  const sessions = Array.isArray(plan.sessions) ? plan.sessions : [];
  const drills = sessions.flatMap((session) => session.drills || []);
  const notes = Array.isArray(plan.notes) ? plan.notes : [];
  container.innerHTML = `
    <article class="result-card">
      <h2>${plan.title}</h2>
      <div class="meta-strip">
        <span class="pill">${plan.profile.sessions} sessions/week</span>
        <span class="pill">${plan.profile.level}</span>
        <span class="pill">${plan.profile.equipment.join(", ")}</span>
      </div>
      <div class="stack">
        ${sessions.map((session) => `
          <section class="exercise-card">
            <h3>${session.name}</h3>
            <ol>${session.drills.map((drill) => `<li>${drill}</li>`).join("")}</ol>
          </section>
        `).join("")}
      </div>
      <h3>Safety Rules</h3>
      <ul>${notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      ${renderProgramTools("flips", drills, plan.title)}
      ${renderForecastControls("flip", forecastWeeks("flip"), "Forecast for")}
    </article>
    ${plan.forecast ? renderForecastCard(plan.forecast.title, plan.forecast.summary, plan.forecast.metrics) : ""}
  `;
  wireProgramTools("flips", drills, plan.title);
  wireForecastControls("flip", () => runPlanForecast("flip", "currentFlipPlan", renderFlipPlan, generateFlipForecast, "#flipPlanResult"));
}

function generateMobilityPlan() {
  const profile = { ...state.mobilityProfile };
  const goalNames = profile.goals.map((goal) => Object.fromEntries(MOBILITY_GOALS)[goal] || goal);
  const drills = profile.goals.flatMap((goal) => mobilityDrillsFor(goal, profile));
  const cap = Number(profile.time) <= 8 ? 4 : Number(profile.time) <= 12 ? 6 : Number(profile.time) <= 20 ? 8 : 10;
  const notes = [
    `Goal blend: ${goalNames.join(", ")}.`,
    `Bias: passive ${profile.passiveFlexibility}/10, active ${profile.activeFlexibility}/10, joint mobility ${profile.jointMobility}/10, loaded mobility ${profile.loadedMobility}/10.`,
    profile.passiveFlexibility >= 7 ? "Passive flexibility is high: use longer relaxed holds after the active work." : "Passive holds stay shorter so the range becomes usable, not just reachable.",
    profile.activeFlexibility >= 7 ? "Active flexibility is high: every session includes lift-offs, end-range holds, or controlled reps." : "Active control is included lightly to keep positions honest.",
    profile.intensity === "hard" ? "Hard intensity means strong but calm stretching. Avoid numbness, pinching, or sharp joint pain." : "Stay patient and repeatable. Mild stretch is enough when done often.",
  ];
  return {
    id: crypto.randomUUID(),
    title: `${goalNames.slice(0, 2).join(" + ")} Mobility Plan`,
    createdAt: new Date().toISOString(),
    profile,
    drills: drills.slice(0, cap),
    notes,
  };
}

function mobilityDrillsFor(goal, profile) {
  const has = (item) => profile.equipment.includes(item);
  const passive = profile.passiveFlexibility >= 7 ? "45-75 sec" : "25-40 sec";
  const active = profile.activeFlexibility >= 7 ? "3 x 6-10" : "2 x 5-6";
  const loaded = profile.loadedMobility >= 7 ? "3 x 6-8 slow" : "2 x 6 controlled";
  const band = has("Bands");
  const block = has("Yoga block") ? "with yoga block" : "hands supported";
  const map = {
    wristMobility: [`Wrist rocks - ${active}`, `Palm lift-offs - 2 x 6 each`, `Prayer stretch - 2 x ${passive}`],
    shoulderRom: [`${band ? "Band shoulder dislocates" : "Wall shoulder slides"} - ${active}`, "Prone swimmer - 2 x 6", `Lat stretch on wall - 2 x ${passive}`],
    thoracicSpine: ["Open book rotation - 2 x 6 each", "Quadruped reach-through - 2 x 6 each", "Bench T-spine extension breathing - 2 x 5 breaths"],
    overheadPosition: [`${band ? "Band lat opener" : "Wall lat stretch"} - 2 x ${passive}`, "Wall slide lift-off - 2 x 5", "Dead bug pullover - 2 x 6"],
    deepSquat: [`Deep squat pry ${block} - 2 x ${passive}`, `Goblet squat hold or counterbalance squat - ${loaded}`, "Ankle rocks - 2 x 10 each"],
    ankleDorsiflexion: ["Knee-to-wall rocks - 2 x 10 each", `Loaded soleus stretch - 2 x ${passive}`, "Tibialis raise - 2 x 12-20"],
    hipInternalRotation: ["90/90 hip switches - 2 x 6 each", `90/90 IR lift-off - ${active}`, `Hip capsule hover hold - 2 x ${passive}`],
    hipExternalRotation: ["90/90 external rotation hold - 2 x 30 sec", `Pigeon good morning - ${loaded}`, "Figure-4 lift-off - 2 x 5 each"],
    hamstrings: [`Active straight-leg raise - ${active}`, `Hamstring floss ${has("Bands") ? "with band" : ""} - 2 x 10`, `Long hamstring hold - 2 x ${passive}`],
    frontSplits: [`Half-split hamstring pulse - ${loaded}`, `Couch stretch - 2 x ${passive}`, `Supported front split ISO - 2 x ${passive}`],
    middleSplits: [`Frog rock-back - ${loaded}`, `Horse stance hold - 3 x 20-40 sec`, `Supported middle split hold - 2 x ${passive}`],
    pancake: [`Seated pancake good morning - ${loaded}`, "Straddle leg lift - 2 x 6 each", `Pancake relaxed hold - 2 x ${passive}`],
    backbend: ["Wall bridge walk-down prep - 3 x 3", `Hip flexor stretch - 2 x ${passive}`, "Thoracic extension over bench or floor - 2 x 5 breaths"],
  };
  return map[goal] || [];
}

function renderMobilityPlan() {
  const container = document.getElementById("mobilityPlanResult");
  if (!container) return;
  const plan = state.currentMobilityPlan;
  if (!plan) {
    container.innerHTML = "";
    return;
  }
  const drills = Array.isArray(plan.drills) ? plan.drills : [];
  const notes = Array.isArray(plan.notes) ? plan.notes : [];
  container.innerHTML = `
    <article class="result-card">
      <h2>${plan.title}</h2>
      <div class="meta-strip">
        <span class="pill">${plan.profile.time} min</span>
        <span class="pill">${plan.profile.frequency} days/week</span>
        <span class="pill">${plan.profile.intensity}</span>
      </div>
      <div class="stack">
        ${drills.map((drill, index) => `
          <div class="exercise-card">
            <div class="exercise-title"><span class="exercise-index">${index + 1}</span><strong>${drill}</strong></div>
          </div>
        `).join("")}
      </div>
      <h3>Rules</h3>
      <ul>${notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      ${renderProgramTools("mobility", drills, plan.title)}
      ${renderForecastControls("mobility", forecastWeeks("mobility", 6), "Forecast for")}
    </article>
    ${plan.forecast ? renderForecastCard(plan.forecast.title, plan.forecast.summary, plan.forecast.metrics) : ""}
  `;
  wireProgramTools("mobility", drills, plan.title);
  wireForecastControls("mobility", () => runPlanForecast("mobility", "currentMobilityPlan", renderMobilityPlan, generateMobilityForecast, "#mobilityPlanResult"));
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
  const injuryContext = jumpInjuryContext();
  return {
    id: crypto.randomUUID(),
    title: `${goal} 8-Week Block`,
    createdAt: new Date().toISOString(),
    goal,
    goals,
    profile,
    diagnosis,
    injuryContext,
    activeInjuries: activeJumpInjuries(),
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
  if (profile.equipment.includes("Dumbbells")) return "Front-Foot Elevated Split Squat";
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
  return "Hamstring Slider Curl";
}

function bestCalfExercise(profile) {
  if (profile.equipment.includes("Calf raise machine")) return "Standing Calf Raise";
  if (profile.equipment.includes("Machines")) return "Seated Calf Raise";
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
  if (profile.equipment.includes("Dumbbells")) return "DB Step-Up";
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
        <button class="ghost" id="forecastJumpBlockBtn">Forecast</button>
      </div>
      ${renderProgramTools("jump", jumpBlockProgramItems(block), block.title)}
    </article>
    ${block.forecast ? renderJumpForecast(block.forecast) : ""}
    <div class="stack">
      ${block.weeks.map(renderJumpWeek).join("")}
    </div>
  `;
  document.getElementById("saveJumpBlockBtn")?.addEventListener("click", saveCurrentJumpBlock);
  document.getElementById("forecastJumpBlockBtn")?.addEventListener("click", forecastCurrentJumpBlock);
  wireProgramTools("jump", jumpBlockProgramItems(block), block.title);
  wireJumpForecastBaselineInputs();
}

function jumpBlockProgramItems(block) {
  return block.weeks?.[0]?.sessions?.flatMap((session) => [`${session.name}: ${session.cue}`, ...session.drills]) || [];
}

function forecastCurrentJumpBlock() {
  if (!state.currentJumpBlock) return;
  state.currentJumpBlock.forecast = generateJumpForecast(state.currentJumpBlock);
  saveState();
  renderJumpBlock();
  document.querySelector(".forecast-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function generateJumpForecast(block) {
  const profile = block.profile;
  const diagnosis = block.diagnosis;
  const goals = normalizedJumpGoals(profile);
  const insuranceBoost = profile.insurance === "high" ? 1.18 : profile.insurance === "medium" ? 1.05 : 0.88;
  const experienceBoost = profile.experience === "new" ? 1.18 : profile.experience === "trained" ? 0.82 : 1;
  const injuryContext = block.injuryContext || jumpInjuryContext();
  const riskDrag = diagnosis.risk >= 2 || injuryContext.moderate ? 0.78 : diagnosis.risk === 1 ? 0.9 : 1;
  const strengthLinks = jumpStrengthLinks(profile);
  const weak = new Set(strengthLinks.weak.map((link) => link.key));
  const goalBoost = (matches) => matches.some((goal) => goals.includes(goal)) ? 1.2 : 1;
  const weakBoost = (key) => weak.has(key) ? 1.18 : 1;
  const baseMultiplier = insuranceBoost * experienceBoost * riskDrag;
  const metrics = [
    {
      key: "squat",
      name: "Squat / Leg Press Strength",
      gain: forecastGain(7.2, baseMultiplier * goalBoost(["vertical", "approachVertical"]) * weakBoost("quadStrength"), 3, 13),
      description: "Use this for your current squat, leg press, or closest knee-dominant strength lift.",
    },
    {
      key: "hinge",
      name: "Hinge / Hamstring Strength",
      gain: forecastGain(6.4, baseMultiplier * goalBoost(["acceleration", "maxVelocity", "sprintSpeed"]) * weakBoost("hamstringStrength"), 3, 12),
      description: "Use this for your current RDL, hinge, hamstring curl, or closest posterior-chain strength lift.",
    },
    {
      key: "calf",
      name: "Calf Raise / Tendon Capacity",
      gain: forecastGain(5.8, baseMultiplier * goalBoost(["reactiveStiffness", "tendonDurability"]) * weakBoost("calfStrength"), 2, 11),
      description: "Use this for your current calf raise load or controlled tendon-capacity benchmark.",
    },
    {
      key: "singleLeg",
      name: "Single-Leg Control Strength",
      gain: forecastGain(6.8, baseMultiplier * goalBoost(["runningLongJump", "landingSkill"]) * Math.max(weakBoost("gluteStrength"), weakBoost("adductorStrength")), 3, 12),
      description: "Use this for split squat, step-down, single-leg press, or your best single-leg control lift.",
    },
    {
      key: "jumpPower",
      name: "Jump Power Expression",
      gain: forecastGain(5.4, baseMultiplier * goalBoost(["vertical", "approachVertical", "standingBroad", "runningLongJump"]) * (diagnosis.type === "Slow-strength dominant jumper" ? 1.16 : 1), 2, 10),
      description: "Use this as a rough percentage lift for measured jump output, not a loaded gym exercise.",
    },
  ];
  return {
    createdAt: new Date().toISOString(),
    summary: "Percentage forecast if you complete the full 8-week block with clean reps, good recovery, and no pain flare-ups. These are training-effect estimates, not guaranteed outcomes.",
    metrics,
  };
}

function forecastGain(base, multiplier, min, max) {
  return Math.round(Math.min(max, Math.max(min, base * multiplier)) * 10) / 10;
}

function renderJumpForecast(forecast) {
  return `
    <article class="result-card forecast-card">
      <div class="inline-head">
        <div>
          <h2>8-Week Strength Forecast</h2>
          <p>${forecast.summary}</p>
        </div>
      </div>
      <div class="forecast-grid">
        ${forecast.metrics.map((metric, index) => renderForecastMetric(metric, index, { baselineSection: "jump" })).join("")}
      </div>
    </article>
  `;
}

function renderForecastControls(section, weeks, label = "Forecast weeks") {
  return `
    <div class="forecast-control">
      <label>
        ${label}
        <input type="number" min="1" max="52" step="1" value="${weeks}" data-forecast-weeks="${section}" />
      </label>
      <button class="ghost" data-run-forecast="${section}">Forecast</button>
    </div>
  `;
}

function renderProgramTools(section, items, title) {
  const schedule = state.schedules[section] || defaultScheduleSettings[section];
  const program = buildWeeklyProgram(section, items, title);
  return `
    <section class="program-tools">
      <div class="inline-head">
        <h3>Schedule + Copy</h3>
        <button class="ghost" data-program-build="${section}">Program</button>
      </div>
      <div class="chip-grid compact-days">
        ${DAYS.map((day) => `<button class="chip ${schedule.days.includes(day) ? "active" : ""}" data-schedule-day="${section}:${day}">${day}</button>`).join("")}
      </div>
      <div class="card-actions">
        <button class="small-button" data-copy-list="${section}">Copy exercise list</button>
        <button class="small-button" data-copy-program="${section}">Copy weekly program</button>
      </div>
      <textarea class="copy-box" id="${section}CopyBox" readonly>${program}</textarea>
    </section>
  `;
}

function wireProgramTools(section, items, title) {
  document.querySelectorAll(`[data-schedule-day^="${section}:"]`).forEach((button) => {
    button.addEventListener("click", () => {
      const day = button.dataset.scheduleDay.split(":")[1];
      const schedule = state.schedules[section] || structuredClone(defaultScheduleSettings[section]);
      schedule.days = toggleArrayValue(schedule.days, day);
      if (!schedule.days.length) schedule.days = [day];
      schedule.days.sort((a, b) => DAYS.indexOf(a) - DAYS.indexOf(b));
      state.schedules[section] = schedule;
      saveState();
      renderAll();
    });
  });
  document.querySelectorAll(`[data-program-build="${section}"]`).forEach((button) => {
    button.addEventListener("click", () => {
      const box = document.getElementById(`${section}CopyBox`);
      if (box) box.value = buildWeeklyProgram(section, items, title);
    });
  });
  document.querySelectorAll(`[data-copy-list="${section}"]`).forEach((button) => {
    button.addEventListener("click", () => copyText(exerciseListText(items, title), button));
  });
  document.querySelectorAll(`[data-copy-program="${section}"]`).forEach((button) => {
    button.addEventListener("click", () => copyText(buildWeeklyProgram(section, items, title), button));
  });
}

function exerciseName(item) {
  return item.exercise?.name || item.name || String(item).split(" - ")[0];
}

function exerciseLine(item) {
  if (typeof item === "string") return item;
  return `${exerciseName(item)} - ${item.sets || "2-3"} x ${item.reps || item.defaultReps || "controlled reps"}, rest ${item.rest || "60-90 sec"}, RIR ${item.rir || "2-3"}`;
}

function exerciseListText(items, title = "Workout") {
  return `${title}\n${items.map((item, index) => `${index + 1}. ${exerciseLine(item)}`).join("\n")}`;
}

function buildWeeklyProgram(section, items, title = "Program") {
  const days = (state.schedules[section]?.days?.length ? state.schedules[section].days : defaultScheduleSettings[section]?.days || ["Mon", "Wed", "Fri"]);
  const split = distributeProgramItems(items, days.length);
  return `${title} Weekly Program\nDays: ${days.join(", ")}\n\n${days.map((day, index) => `${day}\n${split[index].map((item, itemIndex) => `${itemIndex + 1}. ${exerciseLine(item)}`).join("\n") || "Recovery / optional easy walk"}`).join("\n\n")}`;
}

function distributeProgramItems(items, dayCount) {
  const buckets = Array.from({ length: Math.max(1, dayCount) }, () => []);
  items.forEach((item, index) => {
    const pattern = item.exercise?.pattern || "";
    const offset = ["squat", "hinge", "single leg", "jump", "plyometric"].includes(pattern) ? index * 2 : index;
    buckets[offset % buckets.length].push(item);
  });
  return buckets;
}

async function copyText(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    const original = button.textContent;
    button.textContent = "Copied";
    window.setTimeout(() => (button.textContent = original), 900);
  } catch {
    const box = button.closest(".program-tools")?.querySelector(".copy-box");
    if (box) {
      box.value = text;
      box.select();
    }
  }
}

function renderForecastCard(title, summary, metrics, options = {}) {
  return `
    <article class="result-card forecast-card">
      <div class="inline-head">
        <div>
          <h2>${title}</h2>
          <p>${summary}</p>
        </div>
      </div>
      <div class="forecast-grid">
        ${metrics.map((metric, index) => renderForecastMetric(metric, index, options)).join("")}
      </div>
      <p class="forecast-prompt">Visualization idea: upload a current picture plus these stats to ChatGPT and paste: “Using this forecast and my current photo, describe a realistic visual outcome after this timeframe. Keep it practical and avoid exaggerating.”</p>
    </article>
  `;
}

function renderForecastMetric(metric, index, options = {}) {
  const baselineValue = options.baselineSection ? positiveNumber(state.forecastSettings.jumpBaselines[metric.key]) : 0;
  const projected = baselineValue ? baselineValue * (1 + Number(metric.gain || 0) / 100) : 0;
  return `
    <div class="forecast-metric forecast-${index % 5}">
      <div>
        <strong>${metric.name}</strong>
        <small>${metric.description || "Projected change if consistency, recovery, and progression are solid."}</small>
        ${options.baselineSection ? `
          <label class="forecast-baseline">
            Current
            <input type="number" min="0" step="0.5" inputmode="decimal" value="${baselineValue || ""}" placeholder="weight" data-forecast-baseline="${metric.key}" />
          </label>
          ${projected ? `<small>Estimated result: ${formatNumber(projected)}${metric.unit || " in the same unit"}</small>` : `<small>Enter your current rep weight to estimate exact weight.</small>`}
        ` : ""}
      </div>
      <span>${metric.value || `+${metric.gain}%`}</span>
    </div>
  `;
}

function wireForecastControls(section, callback) {
  document.querySelectorAll(`[data-forecast-weeks="${section}"]`).forEach((input) => {
    input.addEventListener("input", () => {
      const key = `${section}Weeks`;
      state.forecastSettings[key] = Math.max(1, Math.min(52, Number(input.value) || state.forecastSettings[key] || 8));
      saveState();
    });
  });
  document.querySelectorAll(`[data-run-forecast="${section}"]`).forEach((button) => {
    button.addEventListener("click", callback);
  });
}

function wireJumpForecastBaselineInputs() {
  document.querySelectorAll("[data-forecast-baseline]").forEach((input) => {
    input.addEventListener("input", () => {
      state.forecastSettings.jumpBaselines[input.dataset.forecastBaseline] = input.value;
      saveState();
      if (!state.currentJumpBlock?.forecast) return;
      renderJumpBlock();
    });
  });
}

function formatNumber(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function forecastWeeks(section, fallback = 8) {
  return Math.max(1, Math.min(52, Number(state.forecastSettings[`${section}Weeks`]) || fallback));
}

function weeklyAdaptationFactor(weeks, halfLife = 8) {
  return 1 - Math.exp(-weeks / halfLife);
}

function runGeneratorForecast() {
  if (!state.currentWorkout) return;
  state.currentWorkout.forecast = generateGeneratorForecast(state.currentWorkout, forecastWeeks("generator"));
  saveState();
  renderWorkout();
  document.querySelector("#workoutResult .forecast-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function generateGeneratorForecast(workout, weeks) {
  const hypertrophyGoals = workout.exercises.filter((item) => item.goal.includes("Hypertrophy")).length;
  const strengthGoals = workout.exercises.filter((item) => item.goal.includes("Strength")).length;
  const athleticGoals = workout.exercises.filter((item) => item.goal.includes("Athletic")).length;
  const painDrag = workout.readiness?.pain === "moderate" ? 0.55 : workout.readiness?.pain === "mild" ? 0.78 : 1;
  const energyBoost = workout.readiness?.energy === "high" ? 1.08 : workout.readiness?.energy === "low" ? 0.82 : 1;
  const volume = workout.exercises.reduce((sum, item) => sum + setCount(item.sets, 2), 0);
  const factor = weeklyAdaptationFactor(weeks, 9) * painDrag * energyBoost;
  const strengthGain = forecastGain(2.5 + strengthGoals * 0.9 + state.profile.strengthBias * 0.35, factor, 1, 16);
  const hypertrophyGain = forecastGain(1.2 + hypertrophyGoals * 0.55 + Math.min(volume, 24) * 0.18, factor, 0.5, 9);
  const workCapacityGain = forecastGain(2 + workout.exercises.length * 0.6 + state.profile.volumeTolerance * 0.25, factor, 1, 14);
  const athleticGain = forecastGain(1.5 + athleticGoals * 1.2 + state.profile.neuralBias * 0.25 + state.profile.jumpBias * 0.2, factor, 0.5, 12);
  return {
    title: `${weeks}-Week Routine Forecast`,
    summary: `Estimated if you repeat this routine consistently for ${weeks} weeks, progress loads/reps when targets are clean, and keep pain from escalating.`,
    metrics: [
      { name: "Main Lift Strength", gain: strengthGain, description: "Best estimate for primary movement strength, assuming progressive overload and stable technique." },
      { name: "Target Muscle Size Signal", gain: hypertrophyGain, description: "Estimated hypertrophy stimulus, not a guaranteed visible size change." },
      { name: "Session Work Capacity", gain: workCapacityGain, description: "Likely improvement in tolerating the same work with better reps, density, or recovery." },
      { name: "Athletic Carryover", gain: athleticGain, description: "Estimated transfer to force control, bracing, stiffness, and cleaner movement intent." },
    ],
  };
}

function runRecompForecast() {
  if (!state.currentRecompPlan) return;
  state.currentRecompPlan.forecast = generateRecompForecast(state.currentRecompPlan, forecastWeeks("recomp", Number(state.currentRecompPlan.profile.timeline) || 12));
  saveState();
  renderRecompPlan();
  document.querySelector("#recompResult .forecast-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function generateRecompForecast(plan, weeks) {
  const profile = plan.profile;
  const weightLb = recompWeightLb(profile);
  if (!weightLb) {
    return {
      title: `${weeks}-Week Recomp Forecast`,
      summary: "Enter bodyweight in the recomp setup to calculate estimated fat loss and muscle gain.",
      metrics: [{ name: "Bodyweight Needed", value: "Missing", description: "The forecast needs current bodyweight to estimate pounds gained or lost." }],
    };
  }
  const maintenance = estimateMaintenanceCalories(profile, weightLb);
  const weeklyLossPct = targetWeeklyLossPct(profile);
  const targetWeight = positiveNumber(profile.targetWeight);
  const desiredLossLb = targetWeight ? Math.max(0, weightLb - toLb(targetWeight, profile.unit)) : weightLb * (weeklyLossPct / 100) * weeks;
  const weeklyLoss = Math.min(desiredLossLb / weeks || weightLb * (weeklyLossPct / 100), weightLb * 0.012);
  const fatLost = Math.max(0, weeklyLoss * weeks * (profile.proteinConsistency >= 6 ? 0.88 : 0.78));
  const musclePotential = (profile.muscleGainPriority / 10) * (profile.proteinConsistency / 10) * (profile.trainingConsistency / 10);
  const trackingDrag = profile.tracking === "no" ? 0.78 : profile.tracking === "flexible" ? 0.9 : 1;
  const deficitDrag = profile.deficitAggression >= 8 ? 0.55 : profile.deficitAggression >= 6 ? 0.75 : 1;
  const muscleGained = Math.max(0, Math.min(weeks * 0.22, weeks * 0.11 * musclePotential * trackingDrag * deficitDrag));
  const scaleChange = fatLost - muscleGained;
  const scalePrefix = scaleChange >= 0 ? "-" : "+";
  const unit = profile.unit === "kg" ? "kg" : "lb";
  const convert = (lb) => profile.unit === "kg" ? lb / 2.20462 : lb;
  return {
    title: `${weeks}-Week Recomp Forecast`,
    summary: `Estimate based on current bodyweight, activity, tracking style, calorie pressure, protein consistency, and the plan's weekly adjustment rules. Estimated maintenance: ${maintenance} kcal/day.`,
    metrics: [
      { name: "Fat Lost", value: `${formatNumber(convert(fatLost))} ${unit}`, description: "Expected fat-mass loss if weekly averages follow the plan." },
      { name: "Muscle Gained", value: `${formatNumber(convert(muscleGained))} ${unit}`, description: "Conservative lean-mass estimate; this depends heavily on training quality from the Generator." },
      { name: "Scale Weight Change", value: `${scalePrefix}${formatNumber(Math.abs(convert(scaleChange)))} ${unit}`, description: "Fat lost minus estimated muscle gained. Water/glycogen can hide this short term." },
      { name: "Average Weekly Pace", value: `${formatNumber(convert(weeklyLoss))} ${unit}/week`, description: "Capped to avoid reckless loss rates." },
    ],
  };
}

function runPlanForecast(section, planKey, renderer, generator, resultSelector) {
  const plan = state[planKey];
  if (!plan) return;
  plan.forecast = generator(plan, forecastWeeks(section));
  saveState();
  renderer();
  document.querySelector(`${resultSelector} .forecast-card`)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function generateBeginnerForecast(plan, weeks) {
  const profile = plan.profile;
  const consistency = profile.confidence === "high" ? 1.08 : profile.confidence === "low" ? 0.78 : 0.92;
  const factor = weeklyAdaptationFactor(weeks, 8) * consistency;
  return {
    title: `${weeks}-Week Beginner Forecast`,
    summary: "Estimated beginner progress if sessions are repeated consistently, reps stay clean, and regressions are used when needed.",
    metrics: [
      { name: "Exercise Skill", gain: forecastGain(8 + (profile.confidence === "high" ? 2 : 0), factor, 4, 22), description: "Cleaner reps, less confusion, and better control on the same exercises." },
      { name: "Strength Base", gain: forecastGain(6 + profile.strengthGain * 0.8, factor, 3, 20), description: "General load/repetition improvement across beginner compounds." },
      { name: "Muscle-Building Signal", gain: forecastGain(4 + profile.muscleGrowth * 0.5 + profile.aesthetics * 0.3, factor, 2, 14), description: "Hypertrophy stimulus trend, not a visible-size guarantee." },
      { name: "Fat-Loss Support", gain: forecastGain(3 + profile.fatLoss * 0.6, factor, 1, 12), description: "Improvement in weekly activity, density, and habit support from the plan." },
    ],
  };
}

function generatePostureForecast(plan, weeks) {
  const avgSignal = plan.diagnosis.reduce((sum, item) => sum + item.score, 0) / Math.max(1, plan.diagnosis.length);
  const painDrag = plan.profile.pain === "moderate" ? 0.62 : plan.profile.pain === "mild" ? 0.82 : 1;
  const factor = weeklyAdaptationFactor(weeks, 5) * painDrag;
  return {
    title: `${weeks}-Week Posture Forecast`,
    summary: "Estimated change in movement-control signals if the reset is done most days and drills stay low pain.",
    metrics: [
      { name: "Weak-Link Signal Reduction", value: `${formatNumber(forecastGain(avgSignal * 6, factor, 6, 38))}%`, description: "How much the top posture signals may feel less obvious during normal movement." },
      { name: "Knee / Hip Control", gain: forecastGain(4 + plan.profile.kneeTracking * 0.5 + plan.profile.hipStability * 0.5, factor, 2, 24), description: "Projected improvement in single-leg control and cleaner tracking." },
      { name: "Shoulder Position Control", gain: forecastGain(4 + plan.profile.forwardShoulder * 0.5 + plan.profile.scapularControl * 0.5, factor, 2, 24), description: "Projected improvement in scapular setting and less forward-shoulder drift." },
      { name: "Daily Mobility Tolerance", gain: forecastGain(5 + plan.profile.ankleMobility * 0.3 + plan.profile.thoracicMobility * 0.3, factor, 2, 22), description: "Ability to access better positions without forcing them." },
    ],
  };
}

function generateCalisthenicsForecast(plan, weeks) {
  const profile = plan.profile;
  const jointDrag = profile.jointTolerance <= 4 ? 0.68 : profile.jointTolerance >= 7 ? 1.06 : 0.9;
  const factor = weeklyAdaptationFactor(weeks, 9) * jointDrag;
  return {
    title: `${weeks}-Week Calisthenics Forecast`,
    summary: "Estimated skill and strength progress with crisp practice, enough rest, and no elbow/wrist/shoulder flare-ups.",
    metrics: [
      { name: "Skill Hold Time", gain: forecastGain(8 + profile.skillPractice * 0.9, factor, 4, 28), description: "Projected improvement in holds like tuck lever, support hold, handstand line, or L-sit variations." },
      { name: "Bent-Arm Strength", gain: forecastGain(5 + profile.bentArm * 0.8, factor, 3, 22), description: "Projected pull-up, dip, push-up, and row strength trend." },
      { name: "Straight-Arm Strength", gain: forecastGain(4 + profile.straightArm * 0.9, factor, 2, 24), description: "Projected locked-elbow/scapular strength trend for planche/front-lever style work." },
      { name: "Compression / Core Control", gain: forecastGain(4 + profile.coreCompression * 0.7, factor, 2, 20), description: "Projected improvement in L-sit, hollow, and active compression control." },
    ],
  };
}

function generateFlipForecast(plan, weeks) {
  const profile = plan.profile;
  const surfaceDrag = profile.surface === "floor" ? 0.72 : profile.surface === "trampoline" ? 1.08 : 0.9;
  const factor = weeklyAdaptationFactor(weeks, 7) * surfaceDrag;
  return {
    title: `${weeks}-Week Flip Forecast`,
    summary: "Estimated prerequisite progress. New flips still require safe surfaces, smart progressions, and ideally qualified spotting.",
    metrics: [
      { name: "Landing Consistency", gain: forecastGain(5 + profile.landingControl * 0.9, factor, 3, 26), description: "Projected improvement in sticking landings and absorbing force quietly." },
      { name: "Tuck Speed", gain: forecastGain(4 + profile.tuckSpeed * 0.85, factor, 2, 24), description: "Projected improvement in fast knee drive, compact shape, and rotation support." },
      { name: "Air Awareness", gain: forecastGain(4 + profile.airAwareness * 0.85, factor, 2, 24), description: "Projected improvement in spotting, shapes, and orientation drills." },
      { name: "Takeoff Pop", gain: forecastGain(3 + profile.jumpPower * 0.75, factor, 2, 20), description: "Projected improvement in set jumps and usable takeoff height." },
    ],
  };
}

function generateMobilityForecast(plan, weeks) {
  const profile = plan.profile;
  const frequency = Number(profile.frequency) || 4;
  const frequencyBoost = frequency >= 6 ? 1.12 : frequency <= 2 ? 0.78 : 0.95;
  const factor = weeklyAdaptationFactor(weeks, 6) * frequencyBoost;
  return {
    title: `${weeks}-Week Mobility Forecast`,
    summary: "Estimated ROM/control improvement if sessions are repeated at the selected frequency and stretches stay calm instead of painful.",
    metrics: [
      { name: "Passive Range", gain: forecastGain(5 + profile.passiveFlexibility * 0.8, factor, 3, 26), description: "Projected improvement in relaxed end-range access." },
      { name: "Active Range", gain: forecastGain(4 + profile.activeFlexibility * 0.85, factor, 2, 24), description: "Projected improvement in lifting, holding, and controlling the range." },
      { name: "Joint Control", gain: forecastGain(4 + profile.jointMobility * 0.8, factor, 2, 24), description: "Projected improvement in usable mobility and end-range ownership." },
      { name: "Loaded Position Strength", gain: forecastGain(3 + profile.loadedMobility * 0.8, factor, 2, 22), description: "Projected improvement in strength inside squat, split, hinge, or overhead positions." },
    ],
  };
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
  const metrics = Array.isArray(plan.metrics) ? plan.metrics : [];
  const notes = Array.isArray(plan.notes) ? plan.notes : [];
  const nutrition = Array.isArray(plan.nutrition) ? plan.nutrition : [];
  const training = Array.isArray(plan.training) ? plan.training : [];
  const adjustments = Array.isArray(plan.adjustments) ? plan.adjustments : [];
  const recompItems = [...nutrition, ...training, ...adjustments];
  container.innerHTML = `
    <article class="result-card">
      <div class="section-head">
        <div>
          <h2>${plan.title}</h2>
          <p>${plan.summary}</p>
        </div>
      </div>
      <div class="meta-strip">
        ${metrics.map(([label, value]) => `<span class="pill">${label}: ${value}</span>`).join("")}
      </div>
      ${notes.map((note) => `<p class="note">${note}</p>`).join("")}
      <div class="card-actions">
        <button class="primary" id="saveRecompPlanBtn">Save Plan</button>
      </div>
      ${renderProgramTools("recomp", recompItems, plan.title)}
      ${renderForecastControls("recomp", forecastWeeks("recomp", Number(plan.profile.timeline) || 12), "Forecast for")}
    </article>
    ${plan.forecast ? renderForecastCard(plan.forecast.title, plan.forecast.summary, plan.forecast.metrics) : ""}
    <div class="grid two">
      ${renderPlanCard("Nutrition", nutrition)}
      ${renderPlanCard("Activity + Food Environment", training)}
    </div>
    ${renderPlanCard("Weekly Adjustment Rules", adjustments)}
  `;
  document.getElementById("saveRecompPlanBtn")?.addEventListener("click", saveCurrentRecompPlan);
  wireProgramTools("recomp", recompItems, plan.title);
  wireForecastControls("recomp", runRecompForecast);
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
      ${renderProgramTools("generator", workout.exercises, workout.title)}
      ${renderForecastControls("generator", forecastWeeks("generator"), "Forecast if repeated for")}
    </article>
    ${workout.forecast ? renderForecastCard(workout.forecast.title, workout.forecast.summary, workout.forecast.metrics) : ""}
    <div class="stack">
      ${workout.exercises.map(renderExerciseCard).join("")}
    </div>
  `;
  document.getElementById("saveRoutineBtn")?.addEventListener("click", saveCurrentRoutine);
  document.getElementById("logCurrentBtn")?.addEventListener("click", () => {
    showTab("log");
    renderLog();
  });
  wireProgramTools("generator", workout.exercises, workout.title);
  wireForecastControls("generator", runGeneratorForecast);
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
  return regressionCandidatesForAvailability(current, usedIds, isAvailable);
}

function regressionCandidatesForAvailability(current, usedIds, availabilityFn) {
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
      return exercise.id !== current.exercise.id && !usedIds.has(exercise.id) && availabilityFn(exercise) && !state.blocked.includes(exercise.id);
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
  const previousSets = setCount(previous.sets, setCount(item.sets, 2));
  const itemSets = setCount(item.sets, previousSets);
  item.sets = Math.max(1, Math.min(previousSets || itemSets, item.exercise.id === "pull-up-negative" ? 3 : itemSets));
  item.rir = "3-4";
  item.rest = previous.rest?.includes("3") ? "2-3 min" : lengthenRest(previous.rest || item.rest);

  if (["pull-up-negative", "eccentric-chin-up"].includes(item.exercise.id)) {
    item.sets = Math.min(3, Math.max(2, previousSets || 2));
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
  if (["calf-isometric-hold", "split-squat-iso-hold", "wall-handstand-line-hold", "hollow-body-hold"].includes(item.exercise.id)) {
    item.reps = item.exercise.defaultReps;
    item.eccentric = "Hold steady";
    item.concentric = "Controlled setup";
    item.rir = "3-5";
    return;
  }
  if (["incline-push-up", "box-squat-to-bench", "side-lying-adduction", "reverse-crunch", "single-leg-glute-bridge"].includes(item.exercise.id)) {
    item.reps = "6-12 easy reps";
    item.eccentric = "3 sec";
    item.concentric = "Smooth";
    item.rir = "3-4";
    return;
  }
  if (["hamstring-slider-curl", "tempo-split-squat", "front-foot-elevated-split-squat"].includes(item.exercise.id)) {
    item.reps = item.exercise.id === "hamstring-slider-curl" ? "4-8 controlled" : "5-8 each";
    item.eccentric = "3-5 sec";
    item.concentric = "Smooth";
    item.rir = "3-4";
    return;
  }

  if (!String(item.reps).includes("sec")) item.reps = regressionRepTarget(item.goal, item.exercise);
  item.eccentric = item.eccentric || "3-5 sec";
  item.concentric = item.concentric || "Smooth";
}

function setCount(value, fallback) {
  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
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

function safeRender(fn, label) {
  try {
    fn();
  } catch (error) {
    console.warn(`Skipped ${label} render`, error);
  }
}

function renderAll() {
  [
    [hydrateReadiness, "readiness"],
    [hydrateProfile, "profile"],
    [hydrateJumpProfile, "jump profile"],
    [hydrateRecompProfile, "recomp profile"],
    [hydrateBeginnerProfile, "beginner profile"],
    [hydratePostureProfile, "posture profile"],
    [hydrateCalisthenicsPlan, "calisthenics profile"],
    [hydrateFlipProfile, "flip profile"],
    [hydrateMobilityProfile, "mobility profile"],
    [renderPickers, "pickers"],
    [renderJumpPickers, "jump pickers"],
    [renderBeginnerEquipment, "beginner equipment"],
    [renderBeginnerPhysiquePriorities, "beginner physique"],
    [renderPostureEquipment, "posture equipment"],
    [renderCalisthenicsPickers, "calisthenics pickers"],
    [renderFlipPickers, "flip pickers"],
    [renderMobilityPickers, "mobility pickers"],
    [renderGoalEditor, "goals"],
    [renderWorkout, "workout"],
    [renderJumpBlock, "jump block"],
    [renderRecompPlan, "recomp"],
    [renderBeginnerPlan, "beginner"],
    [renderPosturePlan, "posture"],
    [renderCalisthenicsPlan, "calisthenics"],
    [renderFlipPlan, "flips"],
    [renderMobilityPlan, "mobility"],
    [renderSavedJumpBlocks, "saved jump blocks"],
    [renderSavedRecompPlans, "saved recomp"],
    [renderSaved, "saved routines"],
    [renderLog, "log"],
    [renderProgress, "progress"],
    [renderPreferences, "preferences"],
    [updateStickyBuildBar, "sticky build"],
  ].forEach(([fn, label]) => safeRender(fn, label));
}

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}

init();
